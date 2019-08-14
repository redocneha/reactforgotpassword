import React from 'react';
import Axios from 'axios';
import Login from './Login';

import { Link} from 'react-router-dom';

export default class Option3 extends React.Component{
    constructor()
    {
        super();
        this.state={
            ques1:null,
            ques2:null,
            status:"false"
         }
       
    }
    componentDidMount()
    {
        
        console.log(`Component is mounted on the DOM`)
       let  data={
            choice:"3"
 
         }
         console.log(data);
         Axios.post("http://localhost:8076/forgotpassword/mts",data).then(res => this.setState({ques1:res.data.question1,ques2:res.data.question2,status:"true"}));

        
     }
     click(){
        let data={
            ans1:document.getElementById("ans1").value,
            ans2:document.getElementById("ans2").value,

        }
        console.log(data);
        Axios.post("http://localhost:8076/forgotpassword/sec",data).then(res => console.log(res));
      }
    render(){
        return(
            <div>
                <h2>Hi from option3</h2>
               <h6>{this.state.ques1}:  </h6>
               <input type="text" name="ans1" id="ans1" ></input><br/>
               <h6>{this.state.ques2}:  </h6>
               <input type="text" name="ans2" id="ans2" ></input><br/>
               <input className="btn btn-primary" type="submit" onClick={this.click}></input><br/>
               {this.state.status=='true'?  <Link to ={`/Login`} >Login</Link>:null}

            </div>
        );
    }
}