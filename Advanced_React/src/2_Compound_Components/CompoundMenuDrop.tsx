import React, { createContext, useContext, useState } from "react";

const CompoundContext = createContext<{
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const CompoundMenu = ({ initialActive, children }) => {
    const [active, setActive] = useState<string>(initialActive);

    return (
        <CompoundContext.Provider value={{ active, setActive }}>
            {children}
        </CompoundContext.Provider>
    );
};

const useMenuContext = () => {
    const context = useContext(CompoundContext);
    if (!context) throw new Error("Error: No menu context provided");
    return context;
};

CompoundMenu.Group = ({ title, children }) => {
    const { active, setActive } = useMenuContext();
    return (
        <div>
            <button
                onClick={() => setActive(title)}
                style={{ fontWeight: active === title ? "bold" : "normal" }}
            >
                {title}
            </button>
            {active === title ? <div>{children}</div> : null}
        </div>
    );
};

const CompoundMenuDrop = () => {
    return (
        <>
            <h5>CompoundMenu</h5>
            <CompoundMenu initialActive={"FAQ"}>
                <CompoundMenu.Group title={"About"}>
                    <p>Some random text about About</p>
                </CompoundMenu.Group>
                <CompoundMenu.Group title={"Job"}>
                    <p>Some random text about Job</p>
                </CompoundMenu.Group>
                <CompoundMenu.Group title={"Goods"}>
                    <p>Some random text about Goods</p>
                </CompoundMenu.Group>
                <CompoundMenu.Group title={"FAQ"}>
                    <p>Some random text about FAQ</p>
                </CompoundMenu.Group>
            </CompoundMenu>
        </>
    );
};

export default CompoundMenuDrop;
