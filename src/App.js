import React, { Component } from 'react';
import SubmitBtn from './SubmitBtn';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word1: 'Cinema',
      word2: 'Iceman',
      isAnagram: null
    };

    this.onWord1Change = this.onWord1Change.bind(this);
    this.onWord2Change = this.onWord2Change.bind(this);
    this.onResult = this.onResult.bind(this);
  };

  onWord1Change(e) {
    this.setState({ word1: e.target.value });
  };

  onWord2Change(e) {
    this.setState({ word2: e.target.value });
  };

  onResult(success) {
    this.setState({ isAnagram: success });

    // Change class after 3 seconds, to allow resetting opacity (and fade effect).
    setTimeout(function(me) { me.setState({ isAnagram: null }); }, 3000, this);
  };

  render() {
    return (
      <div id="demo-screen-1" class="img-responsive">
        <form id="form">
          <div className="form-group">
            <label htmlFor="word-1">Word 1</label>
            <input type="text" className={'form-control ' + (this.state.word1 ? '' : 'validation-required')} id="word-1" placeholder="Word 1" value={ this.state.word1 } onChange={this.onWord1Change} required />
          </div>
          <div className="form-group">
            <label htmlFor="word-2">Word 2</label>
            <input type="text" className={'form-control ' + (this.state.word2 ? '' : 'validation-required')}  id="word-2" placeholder="Word 2" value={ this.state.word2 } onChange={this.onWord2Change} required />
          </div>
          <SubmitBtn word1={this.state.word1} word2={this.state.word2} onResult={this.onResult}>Is It An Anagram?</SubmitBtn>
        </form>
        <div id="output" className={this.state.isAnagram != null ? (this.state.isAnagram ? 'anagram-true' : 'anagram-false') : 'reset'}>
          <i className={this.state.isAnagram != null ? ('fa fa-' + (this.state.isAnagram ? 'check' : 'times')) : ' reset'}></i>
        </div>
      </div>
    );
  }
}

export default App;
