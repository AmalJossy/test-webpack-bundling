import React, { Component} from "react";
import "./App.css";
import ComponentAlpha from "./components/ComponentAlpha";
import methodAA from "./utils/moduleA";
import { methodBA, methodBB } from "./utils/moduleB";

class App extends Component{
  render(){
    const string1 = methodAA();
    const string2 = methodBA();
    const string3 = methodBB();
    return(
      <div styleName="App">
        <h1> Hello, World! </h1>
        <p>{string1}</p>
        <p>{string2}</p>
        <p>{string3}</p>
        <ComponentAlpha />
      </div>
    );
  }
}

export default App;