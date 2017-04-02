import React, { Component } from 'react';
import './App.css';
import Translation from '../Translation/Translation';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
      runes: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 0) return 'success';
    else return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Translation />
      </div>
    );
  }
}

export default App;
