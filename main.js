import React, { useState, useEffect } from "react";
const Route = ({ path, component }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("navigate", onLocationChange);
        return () => window.removeEventListener("navigate", onLocationChange);
    }, []);
    return currentPath === path ? component() : null;
};
const Link = ({ to, children }) => {
    const preventReload = (event) => {
        event.preventDefault();
        window.history.pushState({}, "", to);
        const navigationEvent = new PopStateEvent("navigate");
        window.dispatchEvent(navigationEvent);
    };
    return (React.createElement("a", { href: to, onClick: preventReload }, children));
};
export { Link, Route };
