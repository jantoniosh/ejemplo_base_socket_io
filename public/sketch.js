function setup() {
    createCanvas(600, 600);
    socket = io.connect('http://localhost:6006');
}

function draw() {
    background("#3B83BD");
    fill("#BD833B");
    ellipse(mouseX, mouseY, 100, 100);
    let mousePosition = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', mousePosition)
}