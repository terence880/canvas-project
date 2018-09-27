class DrawingPolygon extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        contextDraft.lineWidth = newWidth;
        contextDraft.strokeStyle = rgbaColor;
        contextDraft.lineJoin = "round";
        contextDraft.lineCap = "round";
        contextReal.lineWidth = newWidth;
        contextReal.strokeStyle = rgbaColor;
        contextReal.lineJoin = "round";
        contextReal.lineCap = "round";

        this.startCoords = [];
        this.startLineCoords = [];
        this.endLineCoords = [];
    }
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];

        if (this.startCoords == '') {
            this.startCoords.push(coord[0], coord[1])
            this.startLineCoords.push(coord[0], coord[1]);
        } 
                
        if (this.endLineCoords[0] !== this.startLineCoords[0] && this.endLineCoords[1] !== this.startLineCoords[1]) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            contextReal.strokeStyle = rgbaColor;
            contextReal.fillStyle = rgbaColorFill;
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.startLineCoords[0], this.startLineCoords[1])
            this.startLineCoords = [];
            this.startLineCoords.push(coord[0], coord[1]);
            var distance;
            (newWidth >= 10 ? distance = newWidth/2 : distance = 5)
             
            if (Math.abs(this.startCoords[0] - this.endLineCoords[0]) < distance && Math.abs(this.startCoords[1] - this.endLineCoords[1]) < distance) {
                this.endLineCoords[0] = this.startCoords[0];
                this.endLineCoords[1] = this.startCoords[1];
                this.contextReal.closePath()
                this.startLineCoords = [];
                this.startCoords = [];
            }
            this.contextReal.lineTo(this.endLineCoords[0],this.endLineCoords[1])
            this.contextReal.stroke()
            this.contextReal.fill()
            
            

        }
        
    }
    onDragging(coord,event){
        
    }

    onMouseMove(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        contextDraft.strokeStyle = rgbaColor
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startLineCoords[0], this.startLineCoords[1])
        this.contextDraft.lineTo(coord[0],coord[1])
        this.contextDraft.stroke();
        this.endLineCoords = [];
        this.endLineCoords.push(coord[0], coord[1]);

    }
    onMouseUp(coord,event){
      saveHistory();
    }
    onMouseLeave(){
    }
    onMouseEnter(){}
}