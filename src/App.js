import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Person.css";
import { Person } from "./Person";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.test);
    this.state = {
      person: [
        { name: "buribooth", age: 27 },
        { name: "김유신", age: 64 },
        { name: "황준필", age: 34 }
      ]
    };
  }
  render() {
    const { person } = this.state;
    return (
      <div className="App">
        <h1>{this.props.test}</h1>
        <Person name={person[0].name} age={person[0].age}></Person>
        <Person name={person[1].name} age={person[1].age}></Person>
        <Person name={person[2].name} age={person[2].age}></Person>
      </div>
    );
  }
}

export default App;
