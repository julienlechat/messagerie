import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { logged } from './Function/global.js'
import Login from './login/login'
import IndexLogged from './messagerie/index'


class CheckLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {logged: false, load: false}
  }

  componentDidMount() {
    if (logged()) this.setState({logged: true})
    return this.setState({load: true})
  }

  componentWillUnmount() {
    if (this.timer) window.clearInterval(this.timer)
  }

  loginAcc(token) {
    if (!token) return
    localStorage.setItem('account', token)
    this.setState({logged: true})
  }

  deconnexion() {
    localStorage.removeItem('account')
    return this.setState({logged: false})
  }

  checkLogged() {
    if (this.state.logged) return <IndexLogged deconnexion={() => this.deconnexion()} />
    return <Login connexion={(token) => !this.state.logged ? this.loginAcc(token) : null} />
  }

  render() {
    return (this.state.load ? this.checkLogged() : <p>Chargement...</p>)
  }
}

export default CheckLogin;



ReactDOM.render(
  <React.StrictMode>
    <CheckLogin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
