import React, { Suspense } from "react";

const SomeLazyComponent = React.lazy(() => import("./SomeHeavyComponent"));

const LazyLoadingPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading lazy component...</div>}>
                <SomeLazyComponent />
            </Suspense>
        </div>
    );
};

export default LazyLoadingPage;
