export class TimeAndScore {
    constructor(time, countDown) {
        this.time = time;
        this.countDown = countDown;
    }
    addToScore(bool) {
        if (!bool) {
            this.time -= 5;
        }
    }
    ;
    startGame() {
        this.countDown = setInterval(() => {
            let timeClock = document.getElementById("timeclock");
            timeClock.innerText = this.time.toString();
            if (this.time <= 0) {
                clearInterval(this.countDown);
                this.leaderBoard();
            }
            this.time--;
        }, 1000);
    }
    stopGame() {
        clearInterval(this.countDown);
        this.leaderBoard();
    }
    leaderBoard() {
        const leaderboard = new Array;
        const getLeaderBoard = JSON.parse(localStorage.getItem("scores") || "{}");
        const sectionHeader = document.getElementById("question-section");
        sectionHeader.textContent = "enter name for the leaderboard!";
        const sectionRoot = document.getElementById("answer-section");
        const inputName = document.createElement("input");
        inputName.setAttribute("id", "input-name");
        const inputButton = document.createElement("button");
        inputButton.setAttribute("id", "input-button");
        inputButton.textContent = "Submit";
        sectionRoot.append(inputName);
        sectionRoot.append(inputButton);
        inputButton.addEventListener("event", () => {
            const userData = {
                user: inputName.value,
                score: this.time
            };
            leaderboard.push(userData);
            localStorage.setItem("scores", JSON.stringify(userData));
        });
    }
    loadDomLeaderBoard() {
        const sectionRoot = document.getElementById("question-section");
        const table = document.createElement("table");
        sectionRoot.append(table);
        const rowHead = table.createTHead().insertRow(0);
        rowHead.insertCell(0).innerHTML = "Name";
        rowHead.insertCell(1).innerHTML = "Score";
    }
}
