import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Osteopathy from "./components/Osteopathy/Osteopathy";
import Rejki from "./components/Rejki/Rejki";
import Massage from "./components/Massage/Massage";
import Courses from "./components/Courses/Courses";
import Articles from "./components/Articles/Articles";

<<<<<<< HEAD
import { makeStyles } from "@material-ui/core/styles";
import About from "./components/About";
import Rejki from "./components/Rejki";
import Osteopathy from "./components/Osteopathy";
import Massage from "./components/Massage";
import Courses from "./components/Courses";
import Articles from "./components/Articles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    // color: "#000000",
    // backgroundColor: "#46b3e6",
    backgroundColor: "#f6f6f6",
  },
  menuImg: {
    marginRight: theme.spacing(2),
    height: "80px",
    width: "80px",
    margin: "5px 5px 5px 0",
  },
  title: {
    color: "#000",
    // color: "#46b3e6",
    flexGrow: 1,
  },
  menuRight: {
    // marginLeft: 0,
    // padding: 0,
    // color: "red",
    color: "#000",
  },
}));
=======
>>>>>>> 0a597e2 (new APP and header)
const App = () => {
  return (
<<<<<<< HEAD
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#73dc28" }}>
        <Toolbar>
          <Avatar
            alt="Remy Sharp"
            src="../assets/logoRPM.png"
            className={classes.menuImg}
          />
          <Typography variant="h6" className={classes.title}>
            Результативно Позитивно Мягко
          </Typography>

          <Tabs
            value={selectedTab}
            onChange={handleChange}
            className={classes.menuRight}
          >
            <Tab label="Главная" />
            <Tab label="Рейки" />
            <Tab label="Остеопатия" />
            <Tab label="Массаж" />
            <Tab label="Курсы, обучение" />
            <Tab label="Статьи" />
          </Tabs>
        </Toolbar>
      </AppBar>
=======
    <div>
      <Router>
        <header>
          <div className="menuLeft">
            <img src="/assets/logoRPM.png" alt="" srcset="" />
            <p>Результативно Позитивно Мягко</p>
          </div>
>>>>>>> 0a597e2 (new APP and header)

          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/rejki">Рейки</Link>
              </li>
              <li>
                <Link to="/osteopathy">Остеопатия</Link>
              </li>
              <li>
                <Link to="/massage">Массаж</Link>
              </li>
              <li>
                <Link to="/courses">Курсы, обучение</Link>
              </li>
              <li>
                <Link to="/articles">Статьи</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rejki">
            <Rejki />
          </Route>
          <Route path="/osteopathy">
            <Osteopathy />
          </Route>
          <Route path="/massage">
            <Massage />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
