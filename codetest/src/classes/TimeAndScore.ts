
export class TimeAndScore {
    public time: number;

    constructor(time:number) {
        this.time = time;
    }

    public addToScore(bool: boolean):void {
        if (!bool) {
            this.time -= 5;
        }
    };

    public startGame():void {
        let countDown = setInterval(() => {
            let timeClock = document.getElementById("timeclock") as HTMLHeadingElement;
            timeClock.innerText = this.time.toString();

            if (this.time <= 0) {
                clearInterval(countDown)
            }    

            this.time--;
        }, 1000);
    }

}