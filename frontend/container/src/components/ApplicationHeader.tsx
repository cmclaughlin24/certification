import { NavLink } from "react-router-dom";
import Header from "./Header";
import { navItems } from "../nav-items";
import logo from "../assets/wells-fargo-logo.webp";
import { useState } from "react";

const ApplicationHeader: React.FC = function () {
  const [isAuthenticated, _setIsAuthenticated] = useState(false);

  return (
    <Header>
      <Header.Branding>
        <NavLink to="/" end>
          <img src={logo} alt="Wells Fargo Bank logo" />
        </NavLink>
      </Header.Branding>
      <Header.MainNavigation items={navItems} />
      <Header.Actions>
        {!isAuthenticated && (
          <NavLink to="/authentication/login">Login</NavLink>
        )}
        {isAuthenticated && <p>Actions</p>}
      </Header.Actions>
    </Header>
  );
};

export default ApplicationHeader;
