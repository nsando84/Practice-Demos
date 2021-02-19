
export class TimeAndScore {
    public score: number;
    public time: number;

    constructor(score: number, time:number) {
        this.score = score;
        this.time = time;
    }

    public addToScore(bool: boolean):void {
        this.score++
    };


}