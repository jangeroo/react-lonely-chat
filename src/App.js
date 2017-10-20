import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { messages: []}
  }

  componentDidMount() {
    [
      {name: 'michael', content: 'Hello'},
      {name: 'BOT', content: 'How are you doing'},
      {name: 'michael', content: 'Fine, thank you'}
    ].map(this.addMessage)
  }

  addMessage = message => {
    this.setState(st => ({messages: st.messages.concat(message)}))
  }

  submitFunction = event => {
    event.preventDefault()
    this.addMessage({name: 'michael', content: this.input.value})
    setTimeout(this.addMessage, 1000, ({name: 'BOT', content: 'Hello, I\'m not a bot'}))
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
