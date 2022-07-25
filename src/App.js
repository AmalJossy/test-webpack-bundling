import React, { Component } from "react";
import "./App.css";
import ComponentAlpha from "./components/ComponentAlpha";
import { adapterMethodPA, adapterMethodQA } from "./utils/adapterServices";
import methodAA from "./utils/moduleA";
import { methodBA, methodBB } from "./utils/moduleB";
import {methodCA, methodDA} from "./utils/index";
import { methodMA } from "./utils/cjsModule";
import svg from "./assets/gateway-logo.svg";

class App extends Component {
  render() {
    const string1 = methodAA();
    const string2 = methodBA();
    const string3 = methodBB();
    const adapterStringP = adapterMethodPA();
    const adapterStringQ = adapterMethodQA();
    const string4 = methodCA();
    const string5 = methodDA();
    const cjsString = methodMA();
    return (
      <div styleName="App">
        <h1> Hello, World! </h1>
        <p>{string1}</p>
        <p>{string2}</p>
        {/* <p>{string3}</p> */}
        <p>{adapterStringP}</p>
        {/* <p>{adapterStringQ}</p> */}
        <ComponentAlpha />
        <p>{string4}</p>
        {/* <p>{string5}</p> */}
        <p>{cjsString}</p>
        <img src={svg} />
      </div>
    );
  }
}

export default App;
