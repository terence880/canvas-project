class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        contextDraft.lineWidth = newWidth;
        contextReal.lineWidth = newWidth;            
        this.shapes = [];
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY)
        this.contextDraft.lineTo(coord[0],coord[1])
        this.contextDraft.stroke();
    }

    onMouseMove(){
        
    }
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY)
        this.contextReal.lineTo(coord[0],coord[1])
        this.contextReal.stroke()
        showHistory();
        
    }
    onMouseLeave(){

    }
    onMouseEnter(){}
}