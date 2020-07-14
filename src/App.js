import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    const {
      target: {value}
    } = e;
    setEmail(value);
  }

  return (
    <section>
      <input placeholder="Email" value={email} onChange={updateEmail}/>
    </section>
  );
};

export default App;
