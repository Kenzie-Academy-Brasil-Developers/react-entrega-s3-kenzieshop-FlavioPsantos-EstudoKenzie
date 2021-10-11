import { Route, Switch } from "react-router"
import Home from "../Pages/Home/home";
import LoginPage from "../Pages/Login/login";

const Routes = () => {
    return (
        <Switch>
              <Route exact path="/">
               <Home/>
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
          
        </Switch>
    )
}
export default Routes;