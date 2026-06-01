const grid = document.getElementById("grid");
for (let i = 0; i < 960; i++) {
    const newdiv = document.createElement("div");
    newdiv.className='item';
    grid.appendChild(newdiv); 
}
