import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { messages: []}
  }

  componentDidMount() {
    [
      {name: 'john', content: 'Hello'},
      {name: 'bob', content: 'How are you doing'},
      {name: 'john', content: 'Fine, thank you'}
    ].map(this.addMessage)

    setInterval(this.addMessage, 1000, ({name: 'troll', content: 'Boo!'}))
  }

  addMessage = message => {
    this.setState(st => ({messages: st.messages.concat(message)}))
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
          <form>
            <input/>
            <button type='submit'>send</button>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
