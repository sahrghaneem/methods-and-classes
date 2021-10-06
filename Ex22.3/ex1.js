const submit =document.querySelector('#submit'),
      input=document.querySelector('#userInput'),
      masge=document.querySelector('.masge'),
      rightgess=document.querySelector('.rightgess'),
      falseletters=document.querySelector('.falseletters'),
      playagain=document.querySelector('.playagain'),

const possibleAnswers = [
    "a","b","c","d",
    "e","f","g","h",
    "i","j","k","l",
    "m","n","o","p",
    "q","r","s","t",
    "u","v","w","x",
    "y","z",
  ];
  submit.style.display ='none';
     
 let randoletter =letters[Math.floor(Math.random() * letters.length)]  
 console.log(randoletter) 
let string=''
input.addEventListener('keyup',() => {
     let tryletter=input.value 
     console.log(tryletter);
     if(letters.includes(tryletter)){
       if(string.includes(tryletter)){
            playagain.innerHTML=`${tryletter} You have try this letter`
       }
        else{
           string += (tryletter) +','
          playagain.innerHTML='nope! wrong letter'
           falseletters.innerHTML= `${string}`
          playagain.style.color='red'
          playagain.style.fontSize='18px'
       }
       input.value=''
       if(tryletter === randoletter){
        rightgess.innerHTML = tryletter 
       playagain.innerHTML='True answer'
        falseletters.innerHTML=''
        playagain.innerHTML='Would you like to play again?'
        input.style.display='none'
        submit.style.display ='block';
        playagain.style.color='green'
        playagain.style.fontSize='18px'
       }
    }
    else {
     playagain.innerHTML = `please inter a valid letter`;
      input.value = "";
  }

 })

 submit.addEventListener('click',()=>{
    submit.style.display ='block';
    location.reload()})