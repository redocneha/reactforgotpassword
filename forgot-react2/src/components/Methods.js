import React from 'react';
import Axios from 'axios';
import Ways from './Ways';
import Option1 from './Option1';
import Option2 from './Option2';
export default class Methods extends React.Component{
    constructor(){
        super();
  
       
        this.click=this.click.bind(this);
        this.state={
           ques1:null,
           ques2:null,
           status3:"false",
           status1:"false",
           status2:"false"
        }
       
        
    }
    
    
      click(){
          
        let data={
            choice:null}
          if(document.getElementById("3").checked==true)
          {
            data={
                choice:"3"
     
             }
             console.log(data);
             Axios.post("http://localhost:8076/forgotpassword/mts",data).then(res => this.setState({ques1:res.data.question1,ques2:res.data.question2,status3:"true"}));
           
            }
            if(document.getElementById("1").checked==true)
            {
              data={
                  choice:"1"
       
               }
               console.log(data);
               Axios.post("http://localhost:8076/forgotpassword/mts",data).then(res => this.setState({status1:"true"}));
              }
              if(document.getElementById("2").checked==true)
              {
                data={
                    choice:"2"
         
                 }
                 console.log(data);
                 Axios.post("http://localhost:8076/forgotpassword/mts",data).then(res => this.setState({otp:res.data.otp,status2:"true"}));
                }
            
      }
 
   

    render(){
        return(
            <div>
            
            <input type="radio" name="methods" id="1" value="1"></input>Email<br/>
            <input type="radio" name="methods" id="2" value="2"></input>OTP<br/>
            <input type="radio" name="methods" id="3" value="3"></input>SecurityQuestions<br/>
            <input className="btn btn-primary" type="submit" onClick={this.click}></input><br/>
           
            {this.state.status3=='true'?<Ways ques1={this.state.ques1} ques2={this.state.ques2}/>:null}
            {this.state.status1=='true'?<Option1 />:null}
            {this.state.status2=='true'?<Option2 otp={this.state.otp}/>:null}

            
            
          


           
            </div>
        );
    }
}