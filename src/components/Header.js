import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="ui vertical pointing menu">
      <Link
        onClick={() => setActiveMenu(0)}
        to="/"
        className={activeMenu === 0 ? "active item" : "item"}
      >
        Search Movies
      </Link>
      <Link
        onClick={() => setActiveMenu(1)}
        to="/favourites"
        className={activeMenu === 1 ? "active item" : "item"}
      >
        My Favourites
      </Link>
      <Link
        onClick={() => setActiveMenu(2)}
        to="/topcharts"
        className={activeMenu === 2 ? "active item" : "item"}
      >
        Top Charts
      </Link>
    </div>
  );
};

export default Header;
