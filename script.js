let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let turnO = true;
let count = 0;
let msg = document.querySelector(".msg")
let msgContainer = document.querySelector(".winnerMsg")
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = ("o");
            turnO = false;
        } else {
            box.innerText = ("x");
            turnO = true;
        }
        box.disabled = true;
        count++;

        let winner = checkWinner();
        if (count === 9 && !winner) {
            drawMsg();
        }
    });

});
const disableAll = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};
const enableAll = () => {
    for (box of boxes) {
        turnO = true;
        count = 0;
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");

    }
};


const drawMsg = () => {
    msg.innerText = "opps!,Game was draw";
    msgContainer.classList.remove("hide");
    disableAll();
};
const winnerMsg = (winner) => {
    msg.innerText = `winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableAll();

};
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val)
                winnerMsg(pos1val);
            };
        };
    };
};
resetBtn.addEventListener("click", enableAll)