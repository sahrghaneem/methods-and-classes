//hold time value
let  milliseconds=0;
let seconds=0;
let minutes=0;

let displaymilliseconds=0;//hold "display" value
let displayseconds=0;
let displayminutes=0;

let interval=null;//hold setinterval()

let status ="stopped";//hold stopwatch status

function stopwatch(){
    
    milliseconds++;

    if(milliseconds/60===1){
        milliseconds=0;
        seconds++;
    }

    if(seconds/60===1){
        seconds=0;
        minutes++;
    }

    if(milliseconds<10){
        displaymilliseconds="0"+milliseconds.toString();
    }
    else{
        displaymilliseconds=milliseconds;
    }
    if(seconds<10){
        displayseconds="0"+seconds.toString()
    }
    else{
        displayseconds=seconds;
    }
    if(minutes<10){
        displayminutes="0"+minutes.toString();
    }
    else{
        displayminutes=minutes;
    }



    document.getElementById("display").innerHTML= displayminutes+":"+displayseconds+":"+displaymilliseconds;
}

function startstop(){
    if(status ==="stopped"){
        window.setInterval(stopwatch,1000);
        document.getElementById("startstop").innerHTML="stop";
        status="start";

    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML="start";
        status="stopped";
    }
}

function reset(){
    window.clearInterval(interval);
    milliseconds=0;
    seconds=0;
    minutes=0;
    document.getElementById("display").innerHTM="00:00:00";
    document.getElementById("startstop").innerHTM="start";

}