import React, { useContext } from "react";
import { Link } from "gatsby";
import { NavbarStyles } from "./styles";
import { StoreContext } from "../../context/store-context";
import Button from "./../button";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { toggleCart, checkout } = useContext(StoreContext);

  return (
    <NavbarStyles>
      <h1>Shelter Shop</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/search">
            Search <FaSearch />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            Cart{" "}
            {checkout.lineItems.length > 0 && `(${checkout.lineItems.length})`}
          </Link>
          <Button
            small
            style={{
              marginLeft: "1em",
            }}
            onClick={toggleCart}
          >
            <FaShoppingCart />
          </Button>
        </li>
      </ul>
    </NavbarStyles>
  );
};

export default Navbar;
