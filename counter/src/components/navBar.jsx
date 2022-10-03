import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge bg-secondary rounded-pill m-2">
            {totalCounters}
          </span>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
