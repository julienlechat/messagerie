import React, { Component } from 'react';
import { loadAllConvers } from '../Function/conversation'
import { Link } from "react-router-dom";

class AllConvers extends Component {
    constructor(props) {
        super(props)
        this.state = {conversations: []}
    }

    componentDidMount() {
        try {
            loadAllConvers()
                .then((res) => this.setState({conversations: res}))
                .catch((e) => console.log(e))
        } catch(e) { console.log(e) }
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <strong className="text-center">Toutes les conversations:</strong>
                <ul className="list-unstyled ps-0">
                    {this.state.conversations.map((value, key) => {
                        return (
                        <li key={key} className="mb-1">
                            <Link to={"/conversation_"+value.id} key={key} className="btn btn-toggle align-items-center rounded collapsed" style={{cursor: 'pointer'}}>• Conversation de {value.login} (id: {value.id})</Link>
                        </li>)
                    })}
                </ul>
                
            </div>
        )
    }
}

export default AllConvers;