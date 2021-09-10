import React, { Component } from 'react';
import { loadConversation, addMsg } from '../Function/conversation'

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {id: 0, messages: [], msg: ''}
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount() {
        this.loadConvers()
    }
    componentDidUpdate() {
        this.loadConvers()
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
            if (reload) this.state.id = 0
            if (this.state.id !== this.props.id) {
                loadConversation(this.props.id)
                    .then((res) => {
                        this.setState({id: this.props.id, messages: res})
                        console.log(res)
                    })
                    .catch((e) => console.log(e))
            }
        } catch(e) { console.log(e)}
    }

    // Ferme une conversatoin
    closeConversation() {
        try {

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
                        return (<div>
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