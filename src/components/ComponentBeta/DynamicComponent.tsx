import { methodBC } from "../../utils/moduleB";

const DynComponent = () => {
    const str = methodBC()
    return <div>From DynComponent: {str}</div>;
  };
  
  export default DynComponent;
  