import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home, Mail, Message, Timeline, TrendingUp } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "white",
    paddingRight: "0",
    paddingLeft: "0",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "gray",
    },
  },
  icon: {
    paddingRight: theme.spacing(1),
    fontSize: "2rem",
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Container className={`${classes.sidebar} side`}>
      <div className="wrapper">
        <div className="sidebarMenu">
          <h3>Dashboad</h3>
          <ul className="sidebarlist">
            <li className="list">
              <Home className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Home </Typography>
            </li>
            <li className="list">
              <Timeline className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}> Analysis </Typography>
            </li>
            <li className="list">
              <TrendingUp className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Sales </Typography>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3>Quick Menu</h3>
          <ul className="sidebarlist">
            <li className="list">
              <Home className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Users </Typography>
            </li>
            <li className="list">
              <Timeline className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}> Products </Typography>
            </li>
            <li className="list">
              <TrendingUp className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>
                Transactions{" "}
              </Typography>
            </li>
            <li className="list">
              <TrendingUp className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Reports </Typography>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3>Notifications</h3>
          <ul className="sidebarlist">
            <li className="list">
              <Mail className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Mail </Typography>
            </li>
            <li className="list">
              <Timeline className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}> Feedbacks </Typography>
            </li>
            <li className="list">
              <Message className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Messages </Typography>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3>Staff</h3>
          <ul className="sidebarlist">
            <li className="list">
              <Home className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Manage </Typography>
            </li>
            <li className="list">
              <Timeline className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}> Analytics </Typography>
            </li>
            <li className="list">
              <TrendingUp className={`${classes.icon}`} />
              <Typography className={`${classes.text}`}>Reports </Typography>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
