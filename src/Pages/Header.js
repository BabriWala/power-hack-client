import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" to="/">Power Hack</Link>
      </div>
      <div className="navbar-center">
      <Link className="btn btn-ghost normal-case text-xl" to="/">Log In</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/signup">Sign Up</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/billinglist">Billing List</Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost">
          Paid Amount: 0
        </button>
      </div>
    </div>
  );
};

export default Header;
