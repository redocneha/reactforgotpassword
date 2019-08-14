import React from 'react';
import Axios from 'axios';
import { Link} from 'react-router-dom';
export default class Ways extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            status:"false"
        }
        this.click=this.click.bind(this)
    }
    click(){
        let data={
            ans1:document.getElementById("ans1").value,
            ans2:document.getElementById("ans2").value,
            
        }
        console.log(data);
        Axios.post("http://localhost:8076/forgotpassword/sec",data).then(res => console.log(res));
        Axios.post("http://localhost:8076/forgotpassword/sec",data).then(res => this.setState({status:res.data.status}));
      }
    render(){
        return(
            <div>
                <h2>Hi from Ways</h2>
                <h6>{this.props.ques1}:  </h6>
               <input type="text" name="ans1" id="ans1" ></input><br/>
               <h6>{this.props.ques2}:  </h6>
               <input type="text" name="ans2" id="ans2" ></input><br/>
               <input className="btn btn-primary" type="submit" onClick={this.click}></input><br/>
               {this.state.status=='true'?  <Link to ={`/Setpassword`} >Setpassword</Link>:null}
            </div>
        );
    }
}