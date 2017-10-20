import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <div id='message-display'>
          <div className='message'>
            <span className='name'><b>john</b> </span>
            <span className='message-content'>Hello</span>
          </div>
          <div className='message'>
            <span className='name'><b>bob</b> </span>
            <span className='message-content'>How are you doing</span>
          </div>
          <div className='message'>
            <span className='name'><b>john</b> </span>
            <span className='message-content'>Fine, thank you</span>
          </div>
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
