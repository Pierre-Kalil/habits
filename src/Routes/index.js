import { Switch,Route } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Groups from "../Pages/Groups"
import PhysicalActivity from "../Pages/PhysicalActivity"

const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route exact path = '/login'>
                <Login />
            </Route>
            <Route exact path = '/dashboard'>
                <Dashboard />
            </Route>
            <Route exact path = '/groups'>
                <Groups />
            </Route>
            <Route exact path = '/groups/physicalactivity'>
                <PhysicalActivity/>
            </Route>
            <Route exact path = '/register'>
                <Register /> 
            </Route>
        </Switch>
    )
}

export default Routes;