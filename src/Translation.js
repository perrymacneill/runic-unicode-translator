import React, { Component } from 'react';
import './App.css';
import TranslationWell from './TranslationWell'
import TranslationInput from './TranslationInput'
import { runeMap } from './RuneMap';

class Translation extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      value: '',
      validation: null,
      runes: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ open: true });
    this.setState({ value: e.target.value });

    const length = e.target.value.length;
    if (length > 0) this.setState({ validation: 'success' });
    else this.setState({ validation: null });

    const value = e.target.value;
    //correcting for letters which do not exist in english
    const valueArray = value.replace(/th/, 'ᚦ').replace(/ng/, 'ᛜ').split('');
    const runeArray = valueArray.map(letter => runeMap.get(letter.toLowerCase()));
    this.setState({ runes: runeArray.join('') });
  }

  render() {
    return (
      <div className="Translation">
        <TranslationInput validation={this.state.validation} handleChange={this.handleChange} />
        <TranslationWell open={this.state.open} content={this.state.runes} />
      </div>
    );
  }
}

export default Translation;
