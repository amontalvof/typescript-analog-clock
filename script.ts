const hourHand = document.querySelector('[data-hour-hand]') as HTMLElement;
const minuteHand = document.querySelector('[data-minute-hand]') as HTMLElement;
const secondHand = document.querySelector('[data-second-hand]') as HTMLElement;

const setClock = (): void => {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
};

const setRotation = (element: HTMLElement, rotationRatio: number): void => {
    element.style.setProperty('--rotation', (rotationRatio * 360).toString());
};

setInterval(setClock, 1000);
setClock();
