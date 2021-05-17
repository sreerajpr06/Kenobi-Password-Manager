import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from "react-router-dom";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
import Login from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Team from "./components/TeamPage";

class App extends Component {
    render() {
        <MainPage />;
        return (
            <Router>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/team" component={Team} />
            </Router>
        );
    }
}

export default App;
