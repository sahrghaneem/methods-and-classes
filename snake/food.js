export function update(){
    
const inputDirection = getInpuutDirect()
for(let i=snakebody.length-2;i>=0;i--){
    snakebody[i+1]={...snakebody[i]}
}
// snakebody[0].x += 1
// snakebody[0].y += 0
}

export function draw(gameBoard){
snakebody.forEach(segment =>{
const snakeElement = document.createElement('div')
snakeElement.style.gridRowStart= segment.y
snakeElement.style.gridColumnStart= segment.x
snakeElement.classList.add('snake')
gameBoard.appendChild(snakeElement)

})
}
