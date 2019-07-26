import Paddle from './paddle';
// I'm on the 10:42
let canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d"); // Rendering context to drawing on the canvas

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
ctx.clearRect(0,0,800,600);


let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
paddle.draw(ctx);