
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

----
- babel-plugin-react-css-modules -> tree-shaking works
- postcss -> tree-shaking works
- asset-loader -> tree-shaking works
- string-replace-loader -> tree-shaking works

- importing a cjs module -> cjs module is not tress shaken but other sibling modules get treeshaken

- add tsconfig.json -> still tree-shakes

----
```
export const methodDA = () => {
  return "from moduleD.methodDA";
};
```
these are considered side effect free, default exports are not(even if re exported).

----
from https://sgom.es/posts/2020-06-15-everything-you-never-wanted-to-know-about-side-effects/
its said that re exports are hard to tree shake as they can have sideffects
not seeing this for adapterMethodQA
----

## Problem
- when 2 exports from one file is used by 2 chunks(dynamically loaded component), it goes to the first bundle