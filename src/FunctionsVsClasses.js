import React, { Component } from "react";

// with functions

function NameFn(props) {
  return <div>{props.name}</div>;
}

function FullNameFn(props) {
  return (
    <>
      <NameFn name={props.name} /> Wilmer
    </>
  );
}

// with classes

class NameCls extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return <div>{this.name}</div>;
  }
}

class FullNameCls extends NameCls {
  render() {
    return <div>{this.name} Wilmer</div>;
  }
}

class App extends Component {
  render() {
    return (
      <>
        <FullNameFn name="Alex" />
        <FullNameCls name="Alex" />
      </>
    );
  }
}

export default App;
