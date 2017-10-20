import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      botResponses: [
        'I\'m not a bot.',
        'Meh.',
        'Whatever, man.'
      ],
    }
  }

  addMessage = message => {
    this.setState(st => ({messages: st.messages.concat(message)}))
  }

  submitFunction = event => {
    event.preventDefault()
    this.addMessage({name: 'michael', content: this.input.value})
    var delay = (Math.random() * (5 - 1) + 1);
    setTimeout(this.addMessage, delay * 1000,
      ({
        name: 'BOT',
        content: this.state.botResponses[Math.floor(Math.random() * this.state.botResponses.length)]
      })
    );
    this.form.reset()
  }
 
  displayMessage = (message) => (
    <div>
      <span><b>{message.name}</b> </span>
      <span>{message.content}</span>
    </div>
  )

  render() {

    return (
      <div>

        <div id='message-display'>
          {this.state.messages.map(this.displayMessage)}
        </div>

        <div id='message-input'>
          <form ref={r => this.form = r} onSubmit={this.submitFunction}>
            <input ref={r => this.input = r}/>
            <button type='submit'>send</button>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
