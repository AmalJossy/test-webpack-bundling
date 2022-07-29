import React, { Suspense } from "react";

const DynComponent = React.lazy(() => import(/* webpackChunkName: "DynamicComponent" */ "./DynamicComponent"));
const ComponentBeta = () => {
  return (
    <div>
      <Suspense fallback={<div>ComponentBeta Loading...</div>}>
        <DynComponent />
      </Suspense>
    </div>
  );
};

export default ComponentBeta;
