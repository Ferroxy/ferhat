setInterval(setClock, 1);

const fnd = document.querySelector('.clock')

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

fnd.addEventListener('click', () => {
    const vAleat = Math.floor(Math.random() * 2)
    const fond = document.querySelector(':root')

    switch (vAleat) {
        case 0:
            fond.style.setProperty('--imgFond', "url('soldier.png')")
            break;
        default:
            fond.style.setProperty('--imgFond', "url('racines.png')")
            break;
    }
})

function setClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds();
    const secRatio = (Date.now() / 10000) * 60;

    const minutesRatio = currentDate.getMinutes() + secondsRatio / 60;
    const hoursRatio =
        (secondsRatio / 60 + currentDate.getMinutes()) / 12 +
        currentDate.getHours() * 5;

    setRotation(secondHand, secRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio);
}
