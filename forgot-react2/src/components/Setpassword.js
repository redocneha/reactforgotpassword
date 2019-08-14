import React from 'react';

export default class Setpassword extends React.Component{

    constructor(props) {
        super(props);
        this.checkScore=this.checkScore.bind(this); 
        this.validatePassword = this.validatePassword.bind(this);
        this.state = {
          
          password: "",
          confirmed: false,
          confirmPassword: "",
          isConfirming: false,
          
        };
      }

    
    validatePassword(){
        this.copy();
        console.log("vpwd");
       let  pwd = document.getElementById("t1").value;
       let  cpwd = document.getElementById("t2").value;
       console.log(pwd);
      
       
       let n = pwd.localeCompare(cpwd);
       console.log(pwd);
    
       if (pwd.length==0) 
         document.getElementById("msg1").innerText="Please enter password";
       else
         document.getElementById("msg1").innerText="  ";
       if (cpwd.length==0)
          document.getElementById("msg2").innerText="Please enter confirm password";
       else
          document.getElementById("msg2").innerText="  ";  
          
       let pass  = pwd;   
        // If confirm password not entered 
    if (cpwd !=pwd  && pwd.length!=0 && cpwd.length!=0)   
      document.getElementById("msg3").innerText="Password did not match: Please try again...";
    else if (pwd==cpwd && pwd.length>0){

        document.getElementById("msg3").innerText="  ";
        document.getElementById("msg2").innerText=this.checkScore();
    }
       
    }
   
    copy(){
        window.event.preventDefault();
        if (window.event.ctrlKey){
        if (window.event.keyCode == 86) {
            console.log("copy");
      //  document.getElementById("t1").value = " ";
        document.getElementById("t2").value = "";
      

        }
    }
}
    checkScore(){
        console.log("run hoja bhai");
        let  cpwd = document.getElementById("t2").value;
       
       // console.log(pwd);
        let pass= cpwd;
        var score = 0;
        console.log(pass);
        // award every unique letter until 5 repetitions
     var letters = new Object();
         for (var i=0; i<pass.length; i++)  {
         letters[pass[i]] = (letters[pass[i]] || 0) + 1;
         score += 5.0 / letters[pass[i]];
     }
       
     console.log(score);
     // bonus points for mixing it up
     var variations = {
         digits: /\d/.test(pass),
         lower: /[a-z]/.test(pass),
         upper: /[A-Z]/.test(pass),
         nonWords: /\W/.test(pass),
     }
 
     let  variationCount = 0;
     for (var check in variations) {
         variationCount += (variations[check] == true) ? 1 : 0;
     }
     score += (variationCount - 1) * 10;
 
     var score = parseInt(score);  
     if (score > 80)
       return "Strong";
     if (score > 60)
        return "Medium";
     if (score >= 30)
        return "Weak";

       return "very weak";
  
    }  
   
    render (){
        return(
        <div className="password_reset">
        <form action="" method="">
        <pre>    
        Password :          <input type="password" name="password" id="t1"  onKeyUp={this.validatePassword} ></input><span id="msg1">  </span><br/><br/>
        Confirm Password:   <input type="password" name="cpassword" id="t2"  onKeyUp={this.validatePassword} ></input><span id="msg2">  </span><br/>
       
        <span id="">  </span>

        <input type="submit" value="Submit"></input> <input type="reset" value="Reset"></input><span id="msg3">  </span>
   
        </pre>
        </form>

        </div>
        )
    }
}




