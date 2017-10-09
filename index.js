window.addEventListener("load",()=>{
  var noscript = document.getElementById("noscript");
  noscript.style.display = "none";
  
  var canvas = document.getElementById("canvas");
  if (!canvas) {
    alert("Canvas element not supported, Cannot proceed.");
    return;
  }
  
  var gl = canvas.getContext("webgl");
  if (!gl) {
    alert("WebGL not supported, Cannot proceed.");
    return;
  }
  
  var canSave = true;
  if (!localStorage) {
    canSave = false;
    
    alert("Local storage not supported, Auto-Saving has been disabled.");
  }
  
  if (canSave) alert("congratz! canvas, webgl and local storage supported.");
},false);
