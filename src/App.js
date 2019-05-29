import React, { Component } from 'react';
import './App.css';

import DisplayQuote from './DisplayQuote';
import GenerateQuote from './GenerateQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.sampleQuote
    };
  }

  sampleQuote = {
    quote: 'Shoplifting is a victimless crime, like punching someone in the dark.',
    character: 'Nelson Muntz',
    image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'
  };

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div>
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}

export default App;