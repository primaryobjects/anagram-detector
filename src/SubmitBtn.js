import React, { Component } from 'react';

export default class SubmitBtn extends Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  };

  click(e) {
    AnagramManager.isAnagram(this.props.word1, this.props.word2);
    e.preventDefault();
  };

  render() {
    return (
      <button type="submit" className="btn btn-primary" onClick={ this.click }>{this.props.children}</button>
    );
  }
}
