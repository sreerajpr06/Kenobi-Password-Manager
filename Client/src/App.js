import React, {Component} from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
import Login from "./components/LoginPage";
import About from "./components/AboutPage";
import Contact from "./components/ContactPage";


class App extends Component{
    render() {
        <MainPage />
        return <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
            
        </Router>
    
    }
}

export default App;
