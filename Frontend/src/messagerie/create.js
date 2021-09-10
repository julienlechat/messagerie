import React, { Component } from 'react';
import { createConversation } from '../Function/conversation'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {msg: '', msgSend: 0}
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(e) {
        this.setState({msg: e.target.value})
    }

    fnSubmit = (e) => {
        e.preventDefault();
        try {
            if (!this.state.msg) return

            createConversation(this.state.msg)
                .then(() => {
                    this.setState({msgSend: 1})
                })
                .catch((e) => {
                    if (e.response) return console.log(e.response.data)
                    console.log(e)})
        } catch(e) { console.log(e) }
    }

    render() {
        return(
            <div className="d-flex flex-column mb-3">
                <p className="text-center fw-bold">Nouvelle conversation</p>
                {this.state.msgSend ? <p>Message transmis</p> : null}
                <form className="d-flex flex-column justify-content-center"  onSubmit={this.fnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="msg" className="form-label">Message :</label>
                        <input name="msg" id="msg" type="text" className="form-control" onChange={this.onUpdate} />
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </div>
        )
    }

}

export default Create;