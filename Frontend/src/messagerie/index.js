import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

// Composants
import Accueil from './accueil'
import Create from './create'
import AllConvers from './allconvers'
import Conversation from './conversation'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {idPage: 0}
    }

    render() {
        return (
            <Router>
                <main className="container">
                    <nav className="navbar navbar-expand navbar-dark bg-dark my-4 rounded">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarColor01">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active">Accueil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/all" className="nav-link">Conversations</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" onClick={() => this.props.deconnexion()}>Déconnexion</a>
                                    </li>
                                </ul>
                                <Link to="/create" className="btn btn-outline-light" type="submit">Créer une conversation</Link>
                            </div>
                        </div>
                    </nav>
                    {/*Définition des routes*/}
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/conversation_:id" element={<Conversation id={this.state.idPage} status={false} reloadList={false} changeId={(id) => {this.setState({idPage: id})}} />} />
                        <Route path="/all" element={<AllConvers />} />
                        <Route path="*" element={<Accueil />} />
                    </Routes>
                </main>
            </Router>
            )
    }
}

export default Index;