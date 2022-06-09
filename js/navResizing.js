const canvasContainer = document.getElementById('canvasContainer');

canvasContainer.style.height = window.innerHeight + "px";

window.addEventListener('resize', function(){
    canvasContainer.style.height = window.innerHeight + "px";
});