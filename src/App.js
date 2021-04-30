import React, { Component } from 'react';

import Counters from './components/Counters';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0},
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c;
    });
    this.setState({ counters });
  }
  
  render() {
    return (
      <>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
          onDelete={this.handleDelete} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset} 
          counters={this.state.counters} />
        </main>
      </>
    )
  }
}

export default App;