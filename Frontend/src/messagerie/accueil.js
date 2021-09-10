import React, { Component } from 'react';

//style
import './accueil.css'

// Function
import { listeConversation } from '../Function/conversation'

// Component
import Conversation from './conversation'

class Accueil extends Component {

    constructor(props) {
        super(props)
        this.state = { liste: [], clickedId: 0}
    }
    
    
    componentDidMount() {
        try {
            this.loadList()
        } catch(e) { console.log(e) }
    }

    // Reçois la liste des conversation et les stocke dans un tableau (this.state.liste)
    loadList() {
        listeConversation()
            .then((res) => this.setState({liste: res}))
            .catch((e) => {
                if (e.response) return console.log(e.response.data)
                console.log(e)})
    }

    render() {
        return(
            
            <div className="d-flex justify-content-between accueil">
                {/* Affiche la liste des conversations à gauche */}
                <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white rounded overflow-hidden mx-4" style={{width: '300px'}}>
                    <div className="list-group list-group-flush border-bottom scrollarea">
                        {this.state.liste.map((value, key) => {
                            return(
                                <button key={key} href="/" onClick={() => this.setState({clickedId: value.id})} className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <strong className="mb-1">conversation de {value.login} (id: {value.id})</strong>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>
                {/* Affiche la conversation à droite*/
                this.state.clickedId > 0 ? <Conversation id={this.state.clickedId} status={true} reloadList={() => {try {this.loadList()} catch(e) {console.log(e)}}}/> : null
                }

            </div>
        )
    }

}

export default Accueil;