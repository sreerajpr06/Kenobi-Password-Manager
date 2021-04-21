import React, {Component} from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import Register from "./components/Register";
import MainPage from "./components/MainPage";



class App extends Component{
    render() {
        <MainPage />
        return <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/register" component={Register} />
            
        </Router>
    
    }
}

export default App;
