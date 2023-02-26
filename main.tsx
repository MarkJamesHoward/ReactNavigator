import React, { useState, useEffect } from "react";
import "./MissingTypes";

const Route: React.FC<Route> = ({ path, component }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("navigate", onLocationChange);
    return () => window.removeEventListener("navigate", onLocationChange);
  }, []);
  return currentPath === path ? component({}) : null;
};

const Link: React.FC<Link> = ({ to, children }) => {
  const preventReload = (event: any) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    const navigationEvent = new PopStateEvent("navigate");
    window.dispatchEvent(navigationEvent);
  };

  return (
    <a href={to} onClick={preventReload}>
      {children}
    </a>
  );
};

export { Link, Route };
