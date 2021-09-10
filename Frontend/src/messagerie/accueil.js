import React, { Component } from 'react';
import './accueil.css'
import { listeConversation } from '../Function/conversation'

class Accueil extends Component {

    constructor(props) {
        super(props)
        this.state = { liste: []}
    }
    
    componentDidMount() {
        try {
            listeConversation()
                .then((res) => {
                    this.setState({liste: res})
                    console.log(res)})
                .catch((e) => {
                    if (e.response) return console.log(e.response.data)
                    console.log(e)})
        } catch(e) { console.log(e) }
    }

    render() {
        return(
            <div className="d-flex justify-content-between accueil">
                <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white rounded overflow-hidden mx-4" style={{width: '300px'}}>
                    <div className="list-group list-group-flush border-bottom scrollarea">
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>

                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    </div>
                </div>
                <p>Menu 2</p>
            </div>
        )
    }

}

export default Accueil;