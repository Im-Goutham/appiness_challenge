
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from '../NotFound';
// import Header from '../components/Header';

class ReactRouter extends React.Component {
  render() {
    return (
        <Router>
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/me/dashboard' component={Dashboard} exact={true}/>
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </Router>

    );
  }
}

export default ReactRouter;