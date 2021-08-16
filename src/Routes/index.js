import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Groups from "../Pages/Groups";
import PhysicalActivity from "../Pages/PhysicalActivity";
import About from "../Pages/About";
import Habits from "../Pages/Habits";
import Community from "../Pages/Community";
import { useEffect } from "react";

const Routes = () => {
  const token = localStorage.getItem("token") || "";

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/dashboard">
        {token ? <Dashboard /> : <Login />}
      </Route>
      <Route exact path="/habits">
        {token ? <Habits /> : <Login />}
      </Route>
      <Route exact path="/groups">
        {token ? <Groups /> : <Login />}
      </Route>
      <Route exact path="/groups/physicalactivity">
        {token ? <PhysicalActivity /> : <Login />}
      </Route>
      <Route exact path="/community">
        {token ? <Community /> : <Login />}
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route>
        <div>Página não encontrada</div>
      </Route>
    </Switch>
  );
};

export default Routes;
