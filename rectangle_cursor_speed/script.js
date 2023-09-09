let rect = document.getElementsByClassName('rectangle')[0];

// Set a factor to control the speed (e.g., 0.3 for slower movement)
const speedFactorX = .7;
const speedFactorY = .3;

document.addEventListener('mousemove', (event) => {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let rectCenterX = window.innerWidth / 2; // Center of the window
    let rectCenterY = window.innerHeight / 2; // Center of the window

    // Calculate the desired position with the speed factor
    let moveX = (mouseX - rectCenterX) * speedFactorX + rectCenterX;
    let moveY = (mouseY - rectCenterY) * speedFactorY + rectCenterY;

    // Apply a small offset to center the rectangle correctly
    moveX -= rect.clientWidth / 2;
    moveY -= rect.clientHeight / 2;
    // console.log(rect.clientWidth)

    rect.style.left = `${moveX}px`;
    rect.style.top = `${moveY}px`;
});

// Center the rectangle initially
rect.style.left = `${(window.innerWidth - rect.clientWidth) / 2}px`;
rect.style.top = `${(window.innerHeight - rect.clientHeight) / 2}px`;
