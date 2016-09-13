import React, { Component } from 'react';
import './css/App.css';

class SubmitBtn extends React.Component {
  click(e) {
    console.log('!');
    e.preventDefault();
  };

  render() {
    return (
      <button type="submit" className="btn btn-primary" onClick={ this.click }>{this.props.children}</button>
    );
  }
}

class App extends Component {
  render() {
    return (
        <form>
          <div className="form-group">
            <label htmlFor="word-1">Word 1</label>
            <input type="text" className="form-control" id="word-1" placeholder="Word 1" defaultValue="Cinema" />
          </div>
          <div className="form-group">
            <label htmlFor="word-2">Word 2</label>
            <input type="text" className="form-control" id="word-2" placeholder="Word 2" defaultValue="Iceman" />
          </div>
          <SubmitBtn>Is It An Anagram?</SubmitBtn>
        </form>
    );
  }
}

export default App;
