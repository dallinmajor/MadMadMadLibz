import React, { Component } from 'react';
import MadLibCreator from './components/createMadLib';
import AnswerMadLib from './components/fillMadlib';
import './App.css';

const regExForPrompt = new RegExp('<.*?>')

class App extends Component {
  state = {
    madLib: null,
    prompt: null,
    text: null,
    done: false
  }

  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({ text: e.target.value });
  }

  handleSubmit = () => {
    if (!this.state.text) { return };
    const ml = this.state.text;
    const firstPrompt = ml.match(regExForPrompt)
    if (!firstPrompt) {
      alert('Hmmmmm. something seems a little off. did you use < > to specify where a word will be inserted?')
    } else {
      this.setState(
        {
          madLib: ml,
          text: null,
          prompt: firstPrompt[0]
        })
    }
  }

  nextPrompt = () => {
    
  }

  render() {
    const { madLib, prompt, done } = this.state;

    if (done) { return (<p>{madLib}</p>) }
    if (prompt) {
      return (
        <AnswerMadLib
        handleInputChange={this.handleInputChange}
        prompt={this.state.prompt}
        text={this.state.text}
        nextPrompt={this.nextPrompt}
        />)
    }
    return (
      <MadLibCreator
        handleInputChange={this.handleInputChange}
        handleMadLibSubmit={this.handleSubmit}
        text={this.state.text}
      />
    )
  }
}

export default App;
