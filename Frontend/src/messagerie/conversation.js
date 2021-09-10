import React, { Component } from 'react';
import { loadConversation, addMsg, closeConvers } from '../Function/conversation'

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {id: 0, messages: [], msg: '', pageid: 0}
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount() {
        const idLink = parseInt(window.location.href.split('_')[1])
        if (!isNaN(idLink)) {
            this.props.changeId(idLink)
            this.setState({pageid: idLink})
        }
        this.loadConvers()
        this.setState({status: this.props.status})
    }
    componentDidUpdate() {
        if (this.props.id !== this.state.pageid) this.loadConvers()
    }

    onUpdate(e) {
        this.setState({msg: e.target.value})
    }

    // Envoie une requete avec le message pour pouvoir l'ajouter dans la conversatoin
    fnSubmit = (e) => {
        e.preventDefault();
        try {
            if (!this.state.msg) return

            addMsg(this.state.id, this.state.msg)
                .then(() => this.loadConvers(true))
                .catch((e) => {
                    if (e.response) return console.log(e.response.data)
                    console.log(e)})
        } catch(e) { console.log(e) }
    }

    // Envoie une requete afin d'avoir tout les messages de la conversation
    loadConvers(reload) {
        try {
            if (reload) this.setState({id: 0})
            if (this.state.id !== this.props.id) {
                loadConversation(this.props.id, this.state.status)
                    .then((res) => this.setState({id: this.props.id, messages: res}))
                    .catch((e) => console.log(e))
            }
        } catch(e) { console.log(e)}
    }

    // Ferme une conversatoin
    closeConversation() {
        try {
            //Ici, je reload la conversation et j'éxecute un reload de la liste (parrent)
            closeConvers(this.state.id)
                .then(() => {
                    this.loadConvers(true)
                    this.props.reloadList()
                })
                .catch((e) => console.log(e))
        } catch(e) { console.log(e) }
    }

    render() {
        if (this.state.id > 0 && this.state.messages.length > 0) {
            return(
                <div className="d-flex flex-fill flex-column rounded overflow-hidden mx-4">
                    <div className="d-flex">
                        <strong className="d-flex flex-fill justify-content-center mb-5">Conversation de {this.state.messages[0].creator}</strong>
                        <div style={{cursor: 'pointer'}} onClick={() => this.closeConversation()}>X</div>
                    </div>
                    {this.state.messages.map((value, key) => {
                        return (<div key={key}>
                            <div className="badge bg-primary text-wrap">{value.msg}</div>
                            <p className="text-muted fw-lighter ">Envoyé par {value.login}</p>
                        </div>)
                    })}
                    <form className="d-flex flex-column justify-content-center"  onSubmit={this.fnSubmit}>
                        <div className="mb-3">
                            <label htmlFor="msg" className="form-label">Message :</label>
                            <input name="msg" id="msg" type="text" className="form-control" onChange={this.onUpdate} />
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
            )
        } else { return <p>Il n'y a pas de conversation d'ouverte</p>}
        
    }
}

export default Conversation;