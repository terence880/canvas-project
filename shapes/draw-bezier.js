class DrawingBezier extends PaintFunction{
  
        constructor(contextReal){
            super();
            this.contextReal = contextReal;
            this.contextDraft = contextDraft;
            this.ctx4 = ctx4;
            contextDraft.lineWidth = newWidth;
            contextReal.lineWidth = newWidth;
            this.startCoords = [];
            this.startLineCoords = [];
            this.endLineCoords = [];
            this.DrawBez = function(){
                DrawBez();
            };
            this.DrawCanvasReal = function() {
                DrawCanvasReal();
            }
        }
    
        onMouseDown(coord,event) {
            this.origX = coord[0];
            this.origY = coord[1];
            
            DrawBez();
    
                // start dragging
                var dx, dy;
                for (var p in pointBez) {
                    dx = pointBez[p].x - coord[0];
                    dy = pointBez[p].y - coord[1];
                    if ((dx * dx) + (dy * dy) < styleBez.pointBez.radius * styleBez.pointBez.radius) {
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
                pointBez[drag].x += coord[0] - dPoint.x;
                pointBez[drag].y += coord[1] - dPoint.y;
                dPoint = {x: coord[0], y: coord[1]};
                DrawBez();
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
    
var e, pointBez, styleBez, drag, dPoint, cp2 ='', slope, angle, center, pAngle, pSlope ;
    
    pointBez = {
        p1: { x:100, y:250 },
        p2: { x:400, y:250 },
       cp1: { x:250, y:100 },
       cp2: { x: 350, y: 100 }
    };
    
    
    // default styles
    styleBez = {
        curve:	{ width: newWidth, color: "#333" },
        cpline:	{ width: 1, color: "#C00" },
        pointBez: { radius: 10, width: 2, color: "#900", fill: "rgba(200,200,200,0.5)", arc1: 0, arc2: 2 * Math.PI }
    }
    
    // DRAW CANVAS
    function DrawBez() {
    
        contextDraft.clearRect(0, 0,  canvasDraft.width,canvasDraft.height);
    
        // curve
        contextDraft.lineWidth = newWidth;
        contextDraft.strokeStyle = rgbaColor;
        contextDraft.beginPath();
        contextDraft.moveTo(pointBez.p1.x, pointBez.p1.y);
        contextDraft.bezierCurveTo(pointBez.cp1.x, pointBez.cp1.y, pointBez.cp2.x, pointBez.cp2.y, pointBez.p2.x, pointBez.p2.y);
        contextDraft.stroke();
        var imgData = contextDraft.getImageData(0,0,800,600)
        ctx4.putImageData(imgData, 0, 0);
    
    
        // control lines
        contextDraft.lineWidth = styleBez.cpline.width;
        contextDraft.strokeStyle = rgbaColor;
        contextDraft.beginPath();
        contextDraft.moveTo(pointBez.p1.x, pointBez.p1.y);
        contextDraft.lineTo(pointBez.cp1.x, pointBez.cp1.y);
        contextDraft.moveTo(pointBez.p2.x, pointBez.p2.y);
        contextDraft.lineTo(pointBez.cp2.x, pointBez.cp2.y);
        contextDraft.stroke();
        
    
        // control points
        for (var p in pointBez) {
            contextDraft.lineWidth = styleBez.pointBez.width;
            contextDraft.strokeStyle = styleBez.pointBez.color;
            contextDraft.fillStyle = styleBez.pointBez.fill;
            contextDraft.beginPath();
            contextDraft.arc(pointBez[p].x, pointBez[p].y, styleBez.pointBez.radius, styleBez.pointBez.arc1, styleBez.pointBez.arc2, true);
            contextDraft.fill();
            contextDraft.stroke();
        }
        
    } // end of DrawCanvas
    