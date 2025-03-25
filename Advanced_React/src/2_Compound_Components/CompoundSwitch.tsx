import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext<{
    isOn: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

const ToggleCompound = ({ initialValue, children }) => {
    const [isOn, setIsOn] = useState<boolean>(initialValue);
    return (
        <ToggleContext.Provider value={{ isOn, setIsOn }}>
            {children}
        </ToggleContext.Provider>
    );
};

const useToggleContext = () => {
    const context = useContext(ToggleContext);
    if (!context) throw new Error("Error: No context provided");
    return context;
};

ToggleCompound.TextOn = () => {
    const { isOn } = useToggleContext();
    return isOn ? <span>On</span> : null;
};

ToggleCompound.TextOff = () => {
    const { isOn } = useToggleContext();
    return !isOn ? <span>Off</span> : null;
};

ToggleCompound.SwitchButton = () => {
    const { setIsOn } = useToggleContext();
    return (
        <button onClick={() => setIsOn((prev: boolean) => !prev)}>
            Switch
        </button>
    );
};

const CompoundSwitch = () => {
    return (
        <ToggleCompound initialValue={true}>
            <h5>Compound Switch</h5>
            <ToggleCompound.SwitchButton />
            <ToggleCompound.TextOn />
            <ToggleCompound.TextOff />
        </ToggleCompound>
    );
};

export default CompoundSwitch;
