function animateBubble(element) {
    let position = 73; //start position of next section of bubble animation
    const interval = 45; //speed of the animation
    const positionOffset = 73; //diff as a variable for position offset

    let loop = setInterval(() => {
        element.style.backgroundPosition = `-${position}px 0px`; //set varible position

        if (position < 292) { //365 is the blank buble position
            position = position + positionOffset; //move the image position by the offset amount
        } else {
            clearInterval(loop); //stop the loop at the end of the animation.
        }

    }, interval);
}