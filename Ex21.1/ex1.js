function myFunction(){
    let x = document.getElementById("myTextarea").value
    document.getElementById("age").innerHTML = "";
    if(isNaN(x))
      {
          document.getElementById("age").innerHTML = "please enter numbers only";
      }
      else if(x<18)
      {
      
          document.getElementById("age").innerHTML = "you’re too young";
          
      }
    else{
        document.getElementById("age").innerHTML ="you can drink appear";
    }
   
  }
  