
    // function increaseFont() {
    //     document.getElementById('Plus').style.fontSize = "100px";
    // }
 
    // function Font() {
    //     let font = document.getElementById('Minus').style.fontSize;            
    //     font++;
    // }
    const Plus = document.querySelector('.Plus'),
    Minus = document.querySelector('.Minus'),
    text = document.querySelector('.text');

let size = 10
text.style.fontSize = size + 'px';

Plus.addEventListener('click', () => {
    sizeUpDown('Plus')
})


Minus.addEventListener('click', () => {
    sizeUpDown('Minus')
})

function sizeUpDown(action) {
    if (action === 'Plus' && size < 100) {
        size++;
    }
    else if(action ==="Minus" && size > 6){
        size--;
    }
    text.style.fontSize = size + 'px';
}