import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link to={"/1_portals"}>1_Portals</Link>
            <Link to={"/2_Compound_Components"}>2_Compound_Components</Link>
            <Link to={"/3_Render_Prop"}>3_Render_Prop</Link>
            <Link to={"/4_Hoc"}>4_Hoc</Link>
        </div>
    );
};

export default HomePage;
