class DrawingQuadratic extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.ctx3 = ctx3;
        contextDraft.lineWidth = newWidth;
        contextReal.lineWidth = newWidth;
        this.startCoords = [];
        this.startLineCoords = [];
        this.endLineCoords = [];
        this.DrawQuad = function(){
            DrawQuad();
        };
        this.DrawCanvasReal = function() {
            DrawCanvasReal();
        };
    }

    onMouseDown(coord,event) {
        this.origX = coord[0];
        this.origY = coord[1];
        
            DrawQuad();

            // start dragging
            var dx, dy;
            for (var p in pointQuad) {
                dx = pointQuad[p].x - coord[0];
                dy = pointQuad[p].y - coord[1];
                if ((dx * dx) + (dy * dy) < styleQuad.pointQuad.radius * styleQuad.pointQuad.radius) {
                    drag = p;
                    dPoint = {x: coord[0], y: coord[1]};
                    canvasDraft.style.cursor = "move";
                    return;
                }
            }                     
    }

    onDragging(coord,event){
        if (drag) {
			//e = MousePos(e);
			pointQuad[drag].x += coord[0] - dPoint.x;
			pointQuad[drag].y += coord[1] - dPoint.y;
            dPoint = {x: coord[0], y: coord[1]};
            DrawQuad();
		}
    }

    onMouseMove(coord){
    }

    onMouseUp(coord,event){
        dragging = false;
        saveHistory();


    }
    onMouseLeave(){
        dragging = false;
    }
    onMouseEnter(){
        
    }

    

} // end of Class


var e, pointQuad, styleQuad, drag, dPoint, cp2 ='', slope, angle, center, pAngle, pSlope ;


    pointQuad = {
        p1: { x:100, y:250 },
        p2: { x:400, y:250 },
        cp1: { x:250, y:100 }
    };

    // default styles
    styleQuad = {
        curve:	{ width: newWidth, color: "#333" },
        cpline:	{ width: 1, color: "#C00" },
        pointQuad: { radius: 10, width: 2, color: "#900", fill: "rgba(200,200,200,0.5)", arc1: 0, arc2: 2 * Math.PI }
    }


// DRAW CANVAS
function DrawQuad() {


    contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    // curve
    contextDraft.lineWidth = newWidth;
    contextDraft.strokeStyle = rgbaColor;;
    contextDraft.beginPath();
    contextDraft.moveTo(pointQuad.p1.x, pointQuad.p1.y);
    contextDraft.quadraticCurveTo(pointQuad.cp1.x, pointQuad.cp1.y, pointQuad.p2.x, pointQuad.p2.y);
    contextDraft.stroke();
    var imgData = contextDraft.getImageData(0,0,800,600)
    ctx3.putImageData(imgData, 0, 0);


    // control lines
    contextDraft.lineWidth = styleQuad.cpline.width;
    contextDraft.strokeStyle = styleQuad.cpline.color;
    contextDraft.beginPath();
    contextDraft.moveTo(pointQuad.p1.x, pointQuad.p1.y);
    contextDraft.lineTo(pointQuad.cp1.x, pointQuad.cp1.y);
    contextDraft.lineTo(pointQuad.p2.x, pointQuad.p2.y);
    contextDraft.stroke();
    

    // control points
    for (var p in pointQuad) {
        contextDraft.lineWidth = styleQuad.pointQuad.width;
        contextDraft.strokeStyle = rgbaColor;
        contextDraft.fillStyle = styleQuad.pointQuad.fill;
        contextDraft.beginPath();
        contextDraft.arc(pointQuad[p].x, pointQuad[p].y, styleQuad.pointQuad.radius, styleQuad.pointQuad.arc1, styleQuad.pointQuad.arc2, true);
        contextDraft.fill();
        contextDraft.stroke();
    }
    
} // end of DrawCanvas




// draw canvas real
function DrawCanvasReal() {
    contextDraft.clearRect(0, 0, canvas.width, canvas.height);
    
    // control lines
    contextReal.lineWidth = styleQuad.cpline.width;
    contextReal.strokeStyle = rgbaColor;
    contextReal.beginPath();
    contextReal.moveTo(pointQuad.p1.x, pointQuad.p1.y);
    contextReal.lineTo(pointQuad.cp1.x, pointQuad.cp1.y);
    contextReal.lineTo(pointQuad.p2.x, pointQuad.p2.y);
    contextReal.stroke();
    
    // curve
    contextReal.lineWidth = styleQuad.curve.width;
    contextReal.strokeStyle = rgbaColor;
    contextReal.beginPath();
    contextReal.moveTo(pointQuad.p1.x, pointQuad.p1.y);
    contextReal.quadraticCurveTo(pointQuad.cp1.x, pointQuad.cp1.y, pointQuad.p2.x, pointQuad.p2.y);
    contextReal.stroke();

    // control points
    for (var p in pointQuad) {
        contextReal.lineWidth = styleQuad.pointQuad.width;
        contextReal.strokeStyle = rgbaColor;
        contextReal.fillStyle = styleQuad.pointQuad.fill;
        contextReal.beginPath();
        contextReal.arc(pointQuad[p].x, pointQuad[p].y, styleQuad.pointQuad.radius, styleQuad.pointQuad.arc1, styleQuad.pointQuad.arc2, true);
        contextReal.fill();
        contextReal.stroke();
    }
    
}