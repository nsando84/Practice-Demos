export class TimeAndScore {
    constructor(time) {
        this.time = time;
    }
    addToScore(bool) {
        if (!bool) {
            this.time -= 5;
        }
    }
    ;
    startGame() {
        let countDown = setInterval(() => {
            let timeClock = document.getElementById("timeclock");
            timeClock.innerText = this.time.toString();
            if (this.time <= 0) {
                clearInterval(countDown);
            }
            this.time--;
        }, 1000);
    }
}
