
/////////////////////
//
interface setData {
    setItem(key: string, value: string): void;
}

export class TimeAndScore {
    public time: number;
    private countDown: number;

    constructor(time:number,countDown?) {
        this.time = time;
        this.countDown = countDown;
    }

    public addToScore(bool: boolean):void {
        if (!bool) {
            this.time -= 5;
        }
    };

    public startGame():void {
        this.countDown = setInterval(() => {
            let timeClock = document.getElementById("timeclock") as HTMLHeadingElement;
            timeClock.innerText = this.time.toString();
            if (this.time <= 0) {
                clearInterval(this.countDown)
                this.leaderBoard()
            }    
            this.time--;
        }, 1000);
        
    }

    public stopGame():void {
        clearInterval(this.countDown)
        this.leaderBoard()
    }
 
    private leaderBoard():void {
        
        const leaderboard = new Array;
        const getLeaderBoard: object = JSON.parse(localStorage.getItem("scores") || "{}")

        const sectionHeader = document.getElementById("question-section")! as HTMLDivElement;
        sectionHeader.textContent = "enter name for the leaderboard!"
        const sectionRoot = document.getElementById("answer-section")! as HTMLDivElement;
        const inputName = document.createElement("input")! as HTMLInputElement;
        inputName.setAttribute("id", "input-name");
        const inputButton = document.createElement("button")! as HTMLButtonElement;
        inputButton.setAttribute("id", "input-button");
        inputButton.textContent = "Submit"
        sectionRoot.append(inputName);
        sectionRoot.append(inputButton);

        inputButton.addEventListener("event", ()=> {
            const userData = {
                user: inputName.value,
                score: this.time
            }

            leaderboard.push(userData);

            localStorage.setItem("scores", JSON.stringify(userData))
        })

        

        

        
        
    }

    private loadDomLeaderBoard() {

        const sectionRoot = document.getElementById("question-section")! as HTMLDivElement;
        const table = document.createElement("table") as HTMLTableElement;

        sectionRoot.append(table);

        const rowHead = table.createTHead().insertRow(0);
        rowHead.insertCell(0).innerHTML = "Name";
        rowHead.insertCell(1).innerHTML = "Score";
        




    }





}