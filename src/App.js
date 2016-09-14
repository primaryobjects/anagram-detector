import React, { Component } from 'react';
import SubmitBtn from './SubmitBtn';
import { AnagramManager } from './js/anagram';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word1: 'Cinema',
      word2: 'Iceman'
    };

    this.onWord1Change = this.onWord1Change.bind(this);
    this.onWord2Change = this.onWord2Change.bind(this);
  };

  onWord1Change(e) {
    this.setState({ word1: e.target.value });
  };

  onWord2Change(e) {
    this.setState({ word2: e.target.value });
  };

  render() {
    return (
        <form>
          <div className="form-group">
            <label htmlFor="word-1">Word 1</label>
            <input type="text" className="form-control" id="word-1" placeholder="Word 1" value={ this.state.word1 } onChange={this.onWord1Change} />
          </div>
          <div className="form-group">
            <label htmlFor="word-2">Word 2</label>
            <input type="text" className="form-control" id="word-2" placeholder="Word 2" value={ this.state.word2 } onChange={this.onWord2Change} />
          </div>
          <SubmitBtn word1={this.state.word1} word2={this.state.word2}>Is It An Anagram?</SubmitBtn>
        </form>
    );
  }
}

export default App;
