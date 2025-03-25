import React, { useState } from "react";

// Cases that cause component to rerender
// 1) Parent component is rerendered
// 2) Its state is changed
// 3) Context is changes
// Props chnages are not included, because they are not the reason but consequence of Parent change
// If we want to stop the chain of Children components rerenders we ought ot use React.memo
// How React.memo works:
// After The Parent component is rerendered it checks Props, if Current Props are different from previos Props
// Then it Rerenders this component, otherwise it does not
// Without React.memo component is rerendered every time
const SlowComponent = () => {
    return <div>Some slow component to rerender</div>;
};

const Counter = () => {
    // To here
    const [count, setCount] = useState<number>(0);

    return (
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    );
};

const StateLocationPage = () => {
    // Remove this state from here
    // const [count, setCount] = useState<number>(0);
    return (
        <div>
            <Counter />
            {/* Every time state is changed, it will couse this slow component to rerender */}
            {/* The easiest way to remove extra rerenders is to place this state in a separate component */}
            <SlowComponent />
        </div>
    );
};

export default StateLocationPage;
