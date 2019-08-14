import React from 'react';
import './ForgotPassword.css';
import Axios from 'axios';
import Methods from './Methods';
export default class ForgotPassword extends React.Component{
    
    constructor(){
        super();
        this.check = this.check.bind(this);
        this.click=this.click.bind(this);
        this.state={
            status:"false",
            st:null
        }
       
        
    }
    check(ev){
        var e=document.getElementById("email");
        var v = this.validateEmail(e);
        if(v){
            document.getElementById("msg").innerText="";
        }
        else{
            document.getElementById("msg").innerText="please enter correct email";
            this.state.st="Wrong email";
        }

    }
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      }
      click(){
        let data={
            email:document.getElementById("email").value
        }
        Axios.post("http://localhost:8076/forgotpassword/uic",data).then(res => this.setState({status:res.data.status}));
      }
 
    render(){
        return(
            <div>
                <h2>Please enter your email to recover the password</h2>
                    <label>Email:   </label> 
                    <input type="email" name="email" id="email" onKeyUp={this.check}></input><span id="msg"></span><br></br>
                    <input className="btn btn-primary" type="submit" onClick={this.click}></input><br/>
                    {this.state.status=='true'?<Methods email={document.getElementById('email').value}/>:this.state.st}
               
            </div>
        );
    }
}