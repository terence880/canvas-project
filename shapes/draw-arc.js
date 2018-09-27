class DrawingArc extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        contextDraft.lineWidth = newWidth;
        contextReal.lineWidth = newWidth;
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        this.startCoords = [];
        this.startCoords.push(coord[0], coord[1])
        
    }
    onDragging(coord,event){
        contextDraft.fillStyle = "#000000"
        this.contextDraft.strokeStyle = rgbaColor;
        contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        contextDraft.beginPath();
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.arc(this.startCoords[0], this.startCoords[1], 1, 0, 360 )
        this.contextDraft.closePath()
        this.contextDraft.stroke();
        this.radius = [];
        this.radius.push(Math.sqrt(Math.pow(coord[0]-this.startCoords[0], 2) + Math.pow(coord[1]-this.startCoords[1],2)))
        
        if (coord[1]-this.startCoords[1]<0) {
            //RH top arc
            contextDraft.arc(this.startCoords[0], this.startCoords[1], this.radius,(Math.atan2(coord[1]-this.startCoords[1], coord[0]-this.startCoords[0])), 0*Math.PI );
        } else if (coord[1]-this.startCoords[1]>0) {
            //RH bottom arc
            contextDraft.arc(this.startCoords[0], this.startCoords[1], this.radius,0*Math.PI, (Math.atan2(coord[1]-this.startCoords[1], coord[0]-this.startCoords[0])));
        }
            //LH top arc
            //contextDraft.arc(this.startCoords[0], this.startCoords[1], this.radius,Math.PI, (Math.atan2(coord[1]-this.startCoords[1], coord[0]-this.startCoords[0])));
            
            //LH bottom arc
            //contextDraft.arc(this.startCoords[0], this.startCoords[1], this.radius, (Math.atan2(coord[1]-this.startCoords[1], coord[0]-this.startCoords[0])), Math.PI);
        contextDraft.stroke();
        
    }

    onMouseMove(){
        
    }
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.strokeStyle = rgbaColor
        this.contextReal.beginPath();
        if (coord[1]-this.startCoords[1]<0) {
            //RH top arc
            contextReal.arc(this.startCoords[0], this.startCoords[1], this.radius,(Math.atan2(coord[1]-this.startCoords[1], coord[0]-this.startCoords[0])), 0*Math.PI );
        } else if (coord[1]-this.startCoords[1]>0) {
            //RH bottom arc
            contextReal.arc(this.startCoords[0], this.startCoords[1], this.radius,0*Math.PI, (Math.atan2(coord[1]-this.startCoords[1], coord[0]-this.startCoords[0])));
        }
        this.contextReal.stroke();
        saveHistory();
    }
    onMouseLeave(){
        
    }
    onMouseEnter(){}
}