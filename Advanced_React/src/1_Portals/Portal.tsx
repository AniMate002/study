import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ setIsOpenModal, isOpenModal }) => {
    return createPortal(
        <div
            style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}
        >
            <div>It is modal</div>
            <button onClick={() => setIsOpenModal(false)}>Close Modal</button>
        </div>,
        document.getElementById("modal_portal") || document.body
    );
};

export default Portal;
