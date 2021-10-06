
function changetext(){
    var x =document.getElementsByClassName('start-here');
    x[0].innerHTML="main title"
}

function removeli(){
    y = document.querySelector('ul')
    y.removeChild(y.lastElementChild)
}

function addli(){
    var z = document.createElement('li');
    z.appendChild(document.createTextNode('sub title 4'));
    document.querySelectorAll('ul')[1].appendChild(z);
}

function newtitle(){
    document.title="Master Of The Dom";
}

function newp(){
 document.querySelector('p').innerHTML = "finally worked";
}
