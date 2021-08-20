import { Avatar, Badge } from "@material-ui/core";
import { Mail, Notifications } from "@material-ui/icons";
import React from "react";

const Navbar = () => {
  return (
    <header className="d-flex align-items-center">
      <nav
        className={`d-flex mt-1 justify-content-between align-items-center navbar-`}
      >
        <div className="logo">Emao Admin</div>
        <div className="icons d-flex align-items-center">
          <Badge badgeContent={4} color="secondary">
            <Mail className="ms-3" />
          </Badge>
          <Badge badgeContent={4} className="ms-3" color="secondary">
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" className="ms-3" src="../images/new.png" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
