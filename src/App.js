import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Osteopathy from "./components/Osteopathy/Osteopathy";
import Rejki from "./components/Rejki/Rejki";
import Massage from "./components/Massage/Massage";
import Courses from "./components/Courses/Courses";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <div className="menuLeft">
            <img src="/assets/logoRPM.png" alt="" srcset="" />
            <p>Результативно Позитивно Мягко</p>
          </div>
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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
