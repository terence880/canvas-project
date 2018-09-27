$(document).ready(function(){

    $('#drawing-clear').click(function(){


        $.confirm({
            'title'     : 'Clear Canvas Confirmation',
            'message'   : 'Any unsaved changes will be lost! <br />It cannot be restored at a later time! Continue?',
            'buttons'   : {
                'Yes'   : {
                    'class' : 'blue',
                    'action': function(){
                        this.contexts = [contextDraft, contextReal, ctx3, ctx4]
                        for (var c in this.contexts) {
                            ctx = this.contexts[c]; 
                            ctx.clearRect(0,0,canvasDraft.width,canvasDraft.height);
                        }
                    }
                },
                'No'    : {
                    'class' : 'gray',
                    'action': function(){}  // Nothing to do in this case. You can as well omit the action property.
                }
            }
        });

    });



});


