import React, { useState, useTransition } from "react";

// There was added a new hook in react called useTransition
// What does it do?
// When we have a very heavy component to render, it creates a loading state and unblocks the whole interface, by putting this render operation to background
// So UI does not look laggy anymore
// How to use it?
// UseTransition hooks returns as first argument "isPending", and the other one is "startTransition"
// when we call a function that will invoke heavy render we need to pass that function as callback to startTransition
// if this render takes longer than normally, then isPending state will be true, when it finishes rendering - false

const SlowComponent = () => {
    return <div>Very Slow Component to render</div>;
};

const TransitionPage = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isPending, startTransition] = useTransition();
    return (
        <div>
            <button
                onClick={() =>
                    startTransition(() => setIsOpen((prev) => !prev))
                }
            >
                Toggle Slow component
            </button>
            {isPending && <div>Loading...</div>}
            {isOpen && <SlowComponent />}
        </div>
    );
};

export default TransitionPage;
