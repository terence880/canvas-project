class DrawingText extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.font = 'italic 40pt Calibri';
        this.contextReal.fillText('Hello World!', this.origX, this.origY);
        savewHistory();
    }
    onDragging(coord,event){
    }

    onMouseMove(){
        
    }
    onMouseUp(coord){

    }
    onMouseLeave(){

    }
    onMouseEnter(){}
}





