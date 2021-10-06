import{update as updatesnake,drow as drowsnake,SNAKE_SPEED} from './snake'

let lastRenderTime=0;
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSincelastRender=(currentTime - lastRenderTime)/1000
    if (secondsSincelastRender<1/SNAKE_SPEED)return
   
    console.log('Render')
    lastRenderTime=currentTime

update()
draw()

}

window.requestAnimationFrame(main)

function update(){
updatesnake()
}

function draw(){
    gameBoard.innerHTML=''
drowsnake(gameBoard)
}