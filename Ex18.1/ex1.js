
function myFunction(){
  let x = document.getElementById("myTextarea").value
  document.getElementById("smile").innerHTML = "";
  if(isNaN(x))
    {
        document.getElementById("smile").innerHTML = "please enter numbers only";
    }
    else
    {
    for(i=0 ;i<x;i++){
        document.getElementById("smile").innerHTML += "&#128522";
        }
    }
  
 
}
