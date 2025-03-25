import React, { createContext, useContext, useState } from "react";
import CompoundSwitch from "./CompoundSwitch";
import CompoundMenuDrop from "./CompoundMenuDrop";

const CompoundComponentsPage = () => {
    return (
        <>
            <div>CompoundComponentsPage</div>
            <CompoundSwitch />
            <CompoundMenuDrop />
        </>
    );
};

export default CompoundComponentsPage;
