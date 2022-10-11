let timer, time_elapsed = 0, ball_x = 0, ball_y = 0;

function start_game() {
    // Start the timer
    timer = setInterval(() => {
        time_elapsed += 1;

        const timer_span = document.getElementById('time_in_seconds');

        timer_span.textContent = time_elapsed;

    }, 1000)

    // Bring the ball to initial position
    const ball = document.getElementById('ball');
    ball.style.top = '0';
    ball.style.left = '0';
    ball_x = 0;
    ball_y = 0;


    // Hide the button container
    const button_container = document.querySelector('.button_container');
    button_container.style.display = 'none';
}


function stop_game() {
    // Stop the timer
    clearInterval(timer);

    // reset the game
    time_elapsed = 0;

    // Show the button container
    const button_container = document.querySelector('.button_container');
    button_container.style.display = 'block';
}

window.onload = () => {

    const ball = document.getElementById('ball');

    document.addEventListener('keydown', (event) => {
        console.log(event.keyCode);
        // 37 for left

        switch (event.keyCode) {
            case 37:    
                console.log('LEFT')
                ball_x -= 10;
                break;

            case 38:   
                console.log('UP')
                ball_y -= 10;
                break;
        
            case 39:   
                console.log('RIGHT');
                ball_x += 10;
                break;
            
            case 40:    
                console.log('DOWN')
                ball_y += 10;
                break;
            
            default:
                break;
        }

        console.log(`${ball_x}px`);
        ball.style.left = `${ball_x}px`;
        ball.style.top = `${ball_y}px`;


        // Check if ball is in the hole
        if(ball_x === 300 && ball_y === 300) {
            stop_game();
        }
    })
}
