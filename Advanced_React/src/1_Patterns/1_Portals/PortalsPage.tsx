import React, { useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Portal from "./Portal";

const PortalsPage = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    return (
        <>
            {isOpenModal && (
                <Portal
                    setIsOpenModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                />
            )}
            <Link to={"/"}>Go Home</Link>
            <div>Portal Page</div>
            <button onClick={() => setIsOpenModal((prev) => !prev)}>
                Toggle Modal with portal
            </button>
        </>
    );
};

export default PortalsPage;
