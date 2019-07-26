let canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d"); // Rendering context to drawing on the canvas
ctx.fillStyle="#f00"; // We change the fill of the rectangle to red
ctx.fillRect(20,20, 100,100) // Draw a rectangule on the canvas, the firm is xpos,ypos,width,height
ctx.fillRect(300,300,40,40); // This is also a red rectangle
 // To change the color we change the style
 ctx.fillStyle="#00f"; // Blue color now
 ctx.fillRect(400,400,40,40);