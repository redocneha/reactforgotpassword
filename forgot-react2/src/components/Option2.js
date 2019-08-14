import React from 'react';
import Axios from 'axios';
import Setpassword from './Setpassword';

import { Link} from 'react-router-dom';
export default class Option2 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            status:"false",
        }
        this.click=this.click.bind(this)
    }
    click(){
        let data={
            otp:document.getElementById("otp").value,
           

        }
        console.log(data);
        Axios.post("http://localhost:8076/forgotpassword/otp",data).then(res => console.log(res));
        Axios.post("http://localhost:8076/forgotpassword/otp",data).then(res => this.setState({status:res.data.status}));
      }
    render(){
        return(
            <div>
                <h2>Hi from option2</h2>
                
               <h4>Please enter OTP</h4><input type="text" id="otp" name="otp"></input>
               <input className="btn btn-primary" type="submit" onClick={this.click}></input><br/>
               {this.state.status=='true'?  <Link to ={`/Setpassword`} >SetPassword </Link>:null}

            </div>
        );
    }
}