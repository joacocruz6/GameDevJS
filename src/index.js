import Paddle from './paddle';
// I'm on the 15:47
let canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d"); // Rendering context to drawing on the canvas

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
ctx.clearRect(0,0,800,600);


let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
paddle.draw(ctx);
let lastTime = 0; 

function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,800,600);
    paddle.update(deltaTime);
    paddle.draw(ctx);
    
    requestAnimationFrame(gameLoop);
}