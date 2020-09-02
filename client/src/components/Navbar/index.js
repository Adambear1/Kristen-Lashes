import React from "react";
import "./styles.css";
function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand navbar-header" href="/">
        Kristen Lashes
      </a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        <button class="btn btn-outline-light my-2 my-sm-0 sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
