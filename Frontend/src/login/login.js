import React, { Component } from 'react';
import './login.css'
import { FnLogin } from '../Function/login'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {user: '', password: ''}
        this.onUpdate = this.onUpdate.bind(this);
    }

    // Modifie le state (user/password)
    onUpdate(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    // Envoie une requete de connexion -> Retourne un token
    fnSubmit = (e) => {
        e.preventDefault();
        try {
            var { user, password } = this.state
            FnLogin(user, password)
                .then((res) => this.props.connexion(res.token))
                .catch((e) => {
                    if (e.response) return console.log(e.response.data)
                    console.log(e)})
        } catch(e) { console.log(e) }
        
    }

    render() {
        return (
            <div className="body-login text-center">
                <main className="form-signin">
                    <form onSubmit={this.fnSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Login</h1>

                        <div className="form-floating">
                            <input type="text" name="user" className="form-control" placeholder="Julien" value={this.state.user} onChange={this.onUpdate} />
                            <label htmlFor="floatingInput">Utilisateur</label>
                        </div>

                        <div className="form-floating">
                            <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Mot de passe" value={this.state.password} onChange={this.onUpdate} />
                            <label htmlFor="floatingPassword">Mot de passe</label>
                        </div>
                        
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Connexion</button>
                    </form>
                </main>
            </div>
            
        )
    }
}

export default Login;