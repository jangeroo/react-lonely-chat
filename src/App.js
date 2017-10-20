import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-alpha.6-dist/css/bootstrap.css'
import LonelyChat from './LonelyChat.js'

class App extends Component {

    render() {
        return (
            <div id="app" className="container">
                <div className="container col-xs-6">
                    <LonelyChat ref={r => this.chatWithJosie = r} botName='Josie' className=""/>
                </div>
                <div className="container col-xs-6">
                    <LonelyChat ref={r => this.chatWithFred = r} botName='Frederic' className=""/>
                </div>
            </div>
        )
    }
}

export default App;
