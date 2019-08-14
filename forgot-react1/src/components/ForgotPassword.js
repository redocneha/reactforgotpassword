import React from 'react';
import './ForgotPassword.css';
import Axios from 'axios';

export default class ForgotPassword extends React.Component{
    constructor(){
        super();
        this.check = this.check.bind(this);
        Axios.post("http://localhost:8076/forgotpassword").then(res => console.log(res));
      
    }
    check(ev){
        var e=document.getElementById("email");
        var v = this.validateEmail(e);
        if(v){
            document.getElementById("msg").innerText="";
        }
        else{
            document.getElementById("msg").innerText="please enter correct email";
        }

    }
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      }
    render(){
        return(
            <div>
                <h2>Please enter your email to recover the passowrd</h2>
                    <label>Email:   </label> 
                    <input type="email" name="email" id="email" onKeyUp={this.check}></input><span id="msg"></span><br></br>
                    <input className="btn btn-primary" type="submit" value="SUBMIT"></input>
                <div id="methods"></div>
            </div>
        );
    }
}