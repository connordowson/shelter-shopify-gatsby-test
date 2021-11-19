import React from "react";
import { Link } from "gatsby";
import { NavbarStyles } from "./styles";

const Navbar = () => {
  return (
    <NavbarStyles>
      <h1>Shelter Shop</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* <li>
          <Link to="/">Christmas Cards</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li> */}

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </NavbarStyles>
  );
};

export default Navbar;
