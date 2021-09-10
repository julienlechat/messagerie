import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

import Accueil from './accueil'
import Create from './create'

class Index extends Component {
    constructor(props) {
        super(props)
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
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/conversaiton_:id" element={<h1>test3</h1>} />
                        <Route path="/all" element={<h1>test4</h1>} />
                        <Route path="*" element={<Accueil />} />
                    </Routes>

                </main>
            </Router>
            )
    }
}

export default Index;