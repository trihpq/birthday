const flowerGift = document.getElementById("flowerGift");
const TDNGift = document.getElementById("TDNGift");

const title = document.getElementById("title");

let flowerOpened = false;
let TDNOpened = false;


function changeTitle(text) {

    title.style.opacity = 0;

    setTimeout(() => {

        title.innerHTML = text;
        title.style.opacity = 1;

    }, 300);

}


flowerGift.addEventListener("click", () => {

    flowerGift.innerHTML = "💐";

    changeTitle("You're the cutest penguin 🐧");

    flowerOpened = true;

    checkFinished();

});


TDNGift.addEventListener("click", () => {

    TDNGift.innerHTML =
        `<img src="./img/TDN-logo.png" alt="TDN Logo">`;

    changeTitle("You're so amazing 🌟");

    TDNOpened = true;

    checkFinished();
});


function checkFinished() {

    if (flowerOpened && TDNOpened) {

        setTimeout(() => {

            changeTitle(
                "Happy Birthday my penguin 🐧"
            );

            title.style.fontSize = "2.55rem";

            launchConfetti();

        }, 700);
    }

}


function launchConfetti() {

    const container =
        document.getElementById("confetti-container");

    const colors = [
        "#ff8fab",
        "#B3EBF2",
        "#ffd166",
        "#FFFFFF",
        "#cdb4db",
        "#95d5b2"
    ];


    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.width = "10px";
        confetti.style.height = "10px";

        confetti.style.borderRadius = "50%";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        confetti.style.pointerEvents = "none";

        confetti.style.zIndex = "999";


        const duration =
            3000 + Math.random() * 2500;

        container.appendChild(confetti);


        confetti.animate(
            [
                {
                    transform:
                        "translateY(0px) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(${window.innerHeight + 100}px) rotate(${720 * Math.random()}deg)`,
                    opacity: 0.8
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}