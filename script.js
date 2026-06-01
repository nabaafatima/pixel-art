const grid = document.getElementById("grid");
const item = document.getElementById("item");
const color = document.getElementById("color");
const eraser = document.getElementById("clear");
let isDrawing = false;
grid.addEventListener('mousedown', () => isDrawing = true);
window.addEventListener('mouseup', () => isDrawing = false);
for (let i = 0; i < 960; i++) {
    const newdiv = document.createElement("div");
    newdiv.className='item';
    grid.appendChild(newdiv);
    newdiv.addEventListener('mousedown', function() {
        this.style.backgroundColor = color.value;
    });
    newdiv.addEventListener('mouseenter', function() {
        if (isDrawing) {
            this.style.backgroundColor = color.value;
        }
    });

}
let lastcolor = color.value;
let isErasing = false;
color.addEventListener('input', () => {
    lastcolor = color.value;
    isErasing = false;
});
eraser.addEventListener('click', () => {
    if (!isErasing) {
        lastcolor = color.value;
        color.value = "#c0c0c0";
        isErasing = true;
    } else {
        color.value = lastcolor;
        isErasing = false;
    }
    
});