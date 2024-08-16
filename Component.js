import React, { Component } from 'react';

// Functional Component
function FunctionalGreeting(props) {
  return <h1>Hello, {props.name} from Functional Component!</h1>;
}

// Class Component
class ClassGreeting extends Component {
  render() {
    return <h1>Hello, {this.props.name} from Class Component!</h1>;
  }
}

// Export both components
export { FunctionalGreeting, ClassGreeting };
