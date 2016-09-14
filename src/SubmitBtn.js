import React, { Component } from 'react';
import { AnagramManager } from './js/anagram';

export default class SubmitBtn extends Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  };

  click(e) {
    if (this.props.word1 && this.props.word2) {
      // Call parent's onResult() method, passing in the result value.
      this.props.onResult(AnagramManager.isAnagram(this.props.word1, this.props.word2));
    }

    e.preventDefault();
  };

  render() {
    return (
      <button type="submit" className="btn btn-primary" onClick={ this.click }>{this.props.children}</button>
    );
  }
}
