import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

const Nav = () => {
  return (
    <AppBar position="relative" style={{ backgroundColor: "#02a39b" }}>
      <Toolbar>
        <IconButton style={{ outline: "none" }} className="me-2">
          <i className="fas fa-bars text-white"></i>
        </IconButton>
        <h3 className="mb-0 fw-bold">Learning Management System</h3>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
