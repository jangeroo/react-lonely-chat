import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      messages: [],
      bots: ['Josie', 'Frederic'],
      botResponses: [
        'I\'m not a bot.',
        'Meh.',
        'Whatever, man.'
      ],
    }
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  addUsername = name => this.setState(st => ({username: name}), this.usernameForm.reset())

  submitUsername = event =>{
    event.preventDefault();
    this.addUsername(this.usernameInput.value)
  }

  addMessage = message => {
    this.setState(st => ({messages: st.messages.concat(message)}))
  }

  sendMessage = event => {
    event.preventDefault()
    this.addMessage({
      name: this.state.username,
      content: this.messageInput.value
    })
    var delay = (Math.random() * (3 - 1) + 1);
    setTimeout(this.addMessage, delay * 1000,
      ({
        name: this.state.bots[Math.floor(Math.random() * this.state.bots.length)],
        content: this.state.botResponses[Math.floor(Math.random() * this.state.botResponses.length)]
      })
    );
    this.messageForm.reset()
  }
 
  displayMessage = (message) => (
    <div>
      <span><b>{message.name}</b> </span>
      <span>{message.content}</span>
    </div>
  )

  render() {
    if (!this.state.username) {
      return (
        <div id='username-input'>
          Hey there! What's your name?
          <form ref={r => this.usernameForm = r} onSubmit={this.submitUsername}>
            <input ref={r => this.usernameInput = r}/>
            <button type='submit'>Submit</button>
          </form>
        </div>
      )
    }
    else {
      return (
        <div>     
          <div id='message-display'>
            {this.state.messages.map(this.displayMessage)}
          </div>

          <div id='message-input'>
            <form ref={r => this.messageForm = r} onSubmit={this.sendMessage}>
              <input ref={r => this.messageInput = r}/>
              <button type='submit'>send</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default App;
