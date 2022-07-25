
```
import methodAA from "./utils/moduleA";
import { methodBA, methodBB } from "./utils/moduleB";

class App extends Component{
  render(){
    const string1 = methodAA();
    const string2 = methodBA();
    const string3 = methodBB();
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <p>{string1}</p>
        <p>{string2}</p>
      </div>
    );
  }
}
```
methodBB gets removed

- babel-plugin-react-css-modules -> tree-shaking works