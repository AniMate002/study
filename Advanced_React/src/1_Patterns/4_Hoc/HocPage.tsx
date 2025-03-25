import React, { useCallback, useState } from "react";

// HOC - Hight Order Component
// This pattern is also called Factory(Фабрика)

const useIsAuthorized = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const switchAuthorized = useCallback(() => {
        setIsAuthorized((prev: boolean) => !prev);
    }, []);
    return { isAuthorized, switchAuthorized };
};

const AuthorizedComponent = () => {
    return <div>Only for Authorized</div>;
};

const UnuthorizedComponent = () => {
    return <div>Only for Unuthorized</div>;
};

const withAuthorize = ({ Authorized, Unauthorized }) => {
    return ({ isAuthorized, ...props }) => {
        return isAuthorized ? (
            <Authorized {...props} />
        ) : (
            <Unauthorized {...props} />
        );
    };
};

const AuthComponent = withAuthorize({
    Authorized: AuthorizedComponent,
    Unauthorized: UnuthorizedComponent,
});

const HocPage = () => {
    const { isAuthorized, switchAuthorized } = useIsAuthorized();
    return (
        <div>
            <button onClick={switchAuthorized}>
                {isAuthorized ? "Logout" : "Login"}
            </button>
            <AuthComponent isAuthorized={isAuthorized} />
        </div>
    );
};

export default HocPage;
