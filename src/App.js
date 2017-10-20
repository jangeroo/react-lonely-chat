import React, { Component } from 'react';
import './App.css';

class App extends Component {

  displayMessage = (message) => (
    <div>
      <span><b>{message.name}</b> </span>
      <span>{message.content}</span>
    </div>
  )

  render() {
    
    var messages = [
      {name: 'john', content: 'Hello'},
      {name: 'bob', content: 'How are you doing'},
      {name: 'john', content: 'Fine, thank you'}
    ]

    return (
      <div>

        <div id='message-display'>
          {messages.map(this.displayMessage)}
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
