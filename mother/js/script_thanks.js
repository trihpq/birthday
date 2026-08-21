const messages = document.querySelectorAll(".message");

messages.forEach((message) => {

    const duration = 4.5 + Math.random() * 2;

    message.style.animationDuration = `${duration}s`;

});