var newList = [];
var step = 0;



function saveHistory() {

  step++;
  
  lastStep = canvasReal.toDataURL();
  
  newList.push(lastStep);
}

$("#undo").click(function () {
  if (step > 0) {
    step--;
    let lastURL = newList[step - 1];
    let img = document.createElement('img');
    img.src = lastURL;
    img.onload = () => {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.drawImage(img, 0, 0);
    }
  }
})

$("#redo").click(function () {
  if (newList.length > step) {
    step++;
    let lastURL = newList[step - 1];
    let img = document.createElement('img');
    img.src = lastURL;
    img.onload = () => {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.drawImage(img, 0, 0);
    }

  }
})
