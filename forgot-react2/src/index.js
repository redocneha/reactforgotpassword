import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Setpassword from './components/Setpassword';
import Option1 from './components/Option1';
import Option2 from './components/Option2';
import Option3 from './components/Option3';
import Login from './components/Login';
const router = (
    <Router>
        <div>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
            <Route exact path="/Setpassword" component={Setpassword}></Route>
            <Route exact path="/Option1" component={Option1}></Route>
            <Route exact path="/Option2" component={Option2}></Route>
            <Route exact path="/Option3" component={Option3}></Route>
            <Route exact path="/Login" component={Login}></Route>
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
