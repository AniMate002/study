import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PortalsPage from "./1_Patterns/1_Portals/PortalsPage";
import HomePage from "./HomePage/HomePage";
import CompoundComponentsPage from "./1_Patterns/2_Compound_Components/CompoundComponentsPage";
import React from "react";
import RenderPropPage from "./1_Patterns/3_Render_Prop/RenderPropPage";
import HocPage from "./1_Patterns/4_Hoc/HocPage";
import StateLocationPage from "./2_Optimization/5_State_location/StateLocationPage";
import TransitionPage from "./2_Optimization/6_Transition/TransitionPage";
import LazyLoadingPage from "./2_Optimization/7_Lazy_Loading/LazyLoadingPage";
import ReduxToolkitPage from "./3_Redux_Toolkit/ReduxToolkitPage";

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
                <Route
                    path='/5_State_location'
                    element={<StateLocationPage />}
                />
                <Route path='/6_Transition' element={<TransitionPage />} />
                <Route path='/7_Lazy_Loading' element={<LazyLoadingPage />} />
                <Route path='/8_Redux_Toolkit' element={<ReduxToolkitPage />} />
            </Routes>
        </>
    );
}

export default App;
