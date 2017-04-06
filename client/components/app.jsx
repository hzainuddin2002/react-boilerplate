import React from 'react';
import ReactDOM from 'react-dom';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'myvalue': 'Jarid'
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Header name='Sammi'/>
        <Button />
      </div>
    );
  }
}

const Button = () => {
  return (
    <button>Click Me</button>
  );
}

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  );
}

ReactDOM.render(
  <MyComponent>Jarid</MyComponent>,
  document.getElementById('root')
);