window.addEventListener("DOMContentLoaded",()=>{

    const section = document.querySelector('section');
    const logo = document.querySelector('.logo');
    const FPS = 60; // Frame Per Second
    let interval = null;
    
    section.style.width = `${window.innerWidth}px`;
    section.style.height = `${window.innerHeight}px`;
    
    let xPosition = 10;
    let yPosition = 10;
    let xSpeed = 5;
    let ySpeed = 5;
    
    logo.style.left = `${xPosition}px`;
    logo.style.top = `${yPosition}px`;
    
    function positionBall() {
        logo.style.left = `${xPosition}px`;
        logo.style.top = `${yPosition}px`;
        // console.log(xPosition,yPosition);
    }
    
    function detectCollision() {
        if (xPosition + logo.clientWidth >= window.innerWidth || xPosition < 10) {
            //whether we can add more space in the if condition like adding 10 or more or we can add overflow-x: hidden in 'section' in css file to prevent showing scrollbars unexpectedly
            xSpeed = -xSpeed;
            changeColor();
        }
        if (yPosition + logo.clientHeight >= window.innerHeight || yPosition < 10) {
            ySpeed = -ySpeed;
            changeColor();
        }
    }
    
    function changeColor() {
        // let col = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        let color = `#`;
        color += Math.random().toString(16).slice(2, 8).toUpperCase();
        logo.style.fill = color;
        // console.log(color);
    }
    
    function moveBall() {
        if (!interval) {
            interval = setInterval(() => {
                xPosition += xSpeed;
                yPosition += ySpeed;
    
                detectCollision();
                positionBall();
                // changeColor();
            }, 1000 / FPS);
        }
    }
    
    window.addEventListener('resize', () => {
        section.style.width = `${window.innerWidth}px`;
        section.style.height = `${window.innerHeight}px`;
        xPosition = 10;
        yPosition = 10;
        interval = null;
        // moveBall()
    });
    
    moveBall();
})
