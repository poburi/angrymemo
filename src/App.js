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
        { name: "buribooth", age: 27, myfunc: () => console.log("test") },
        { name: "연개소문", age: 64 },
        { name: "대조영", age: 26 }
      ]
    };
  }
  render() {
    const { person } = this.state;
    const myfunc = () => {
      console.log("진짜진짜???");
    };
    return (
      <div className="App">
        <h1>{this.props.test}</h1>
        <Person {...person[0]} myfunc={myfunc} st={this.state}>
          <div>안녕하세요!</div>
        </Person>
      </div>
    );
  }
}

export default App;
