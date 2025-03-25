import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PortalsPage from "./1_Portals/PortalsPage";
import HomePage from "./HomePage/HomePage";
import CompoundComponentsPage from "./2_Compound_Components/CompoundComponentsPage";
import React from "react";
import RenderPropPage from "./3_Render_Prop/RenderPropPage";
import HocPage from "./4_Hoc/HocPage";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/1_portals' element={<PortalsPage />} />
                <Route
                    path='/2_Compound_Components'
                    element={<CompoundComponentsPage />}
                />
                <Route path='/3_Render_Prop' element={<RenderPropPage />} />
                <Route path='/4_Hoc' element={<HocPage />} />
            </Routes>
        </>
    );
}

export default App;
