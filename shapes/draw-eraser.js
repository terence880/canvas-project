class DrawingEraser extends PaintFunction{
  constructor(contextReal){
      super();
      this.contexts = [contextDraft, contextReal, ctx3, ctx4]
      this.contextDraft = contextDraft;
      this.contextReal = contextReal;
      this.ctx3 = ctx3;    
      this.ctx4 = ctx4;
  }
  
  onMouseDown(coord,event){
      var c=1;
      for (var c=1; c < this.contexts.length; c++) {
          this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
          ctx = this.contexts[c]; 
          ctx.strokeStyle = "rgba(225,225,225,0)";
          ctx.lineJoin = "round";
          ctx.lineCap = "round";
          ctx.lineWidth = newWidth;        

          ctx.beginPath();
          ctx.moveTo(coord[0],coord[1]);
          this.draw(coord[0],coord[1]);
      }

  }
  onDragging(coord,event){
      this.draw(coord[0],coord[1]);
      
  }

  onMouseMove(){}
  onMouseUp(){}
  onMouseLeave(){}
  onMouseEnter(){}

  draw(x,y){
      for (var d=1; d < this.contexts.length; d++) {

          ctx = this.contexts[d]; 
          ctx.strokeStyle = "rgba(0,0,0,1)";
          ctx.lineJoin = "round";
          ctx.lineCap = "round";
          ctx.lineWidth = newWidth;        
  
          ctx.save();
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.arc(x, y, newWidth, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.restore();
      }
  }
}