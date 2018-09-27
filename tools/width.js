var setWidth = function(newWidth) {
    if (newWidth<minWidth)
        newWidth = minWidth;
    else if (newWidth>maxWidth)
        newWidth = maxWidth
        //setWidth = newWidth
    contextDraft.lineWidth = newWidth;
    contextReal.lineWidth = newWidth;
    $('#width-val').html(newWidth);
}
var minWidth = 0.5,
    maxWidth = 100,
    defaultWidth = 20,
    interval = 1,
    widthSpan = document.getElementById('width_val');
    widthSlide = document.getElementById('width-set');

widthSlide.addEventListener('input', function(){
    newWidth = $('#width-set').val();
    setWidth(newWidth);
})
