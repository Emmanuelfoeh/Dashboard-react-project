import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import SingleUserPage from "./Components/SingleUserPage";
import NewUser from "./Components/NewUser";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    margin: "0 auto",
  },
  mainApp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router className={classes.mainApp}>
      <Navbar />
      <Grid container className={classes.root}>
        <Grid item xs={2} sm={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sm={10}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/userlist">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <SingleUserPage />
            </Route>
            <Route path="/newuser">
              <NewUser />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
