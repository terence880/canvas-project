let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let layer3 = document.getElementById('layer3');
let ctx3 = layer3.getContext('2d');
let layer4 = document.getElementById('layer4');
let ctx4 = layer4.getContext('2d');

let currentFunction;
let dragging = false;
//Tool settings
let newWidth = 5;
let lineWidth = newWidth;
let lineJoin = "round";
let lineCap = "round"
let strokeStyle = "red";
let fillStyle = "blue";

this.contexts = [contextDraft, contextReal, ctx3, ctx4]
for (var c in this.contexts) {
    ctx = this.contexts[c]; 
    ctx.canvas.width = window.innerWidth -200;
    ctx.canvas.height = window.innerHeight -200;
}

$('#canvas-draft').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
    if(newList.length!=step){
      newList.splice(step);
    }
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
    $('#coordinates').html(`X: ${mouseX}, Y: ${mouseY}`)
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}    
