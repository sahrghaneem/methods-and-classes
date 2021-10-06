
function myFunction() {

    let x = document.getElementById("myTextarea").value.length;
    if(x<100)
        document.getElementById("txt").innerHTML = "not enough chars";
    else
        document.getElementById("txt").innerHTML = "Thanks!";
  }

