let image = "<img src='https://getacademy.no/hubfs/GET_RGB_logo-01-2.png' />"
const imageIndex = [image, '', '', ''];
let imageSquare = 0;
const app = document.getElementById('app');
const buttonOff = ['', 'disabled'];
let upOff = 1;
let leftOff = 1;
let rightOff = 0;
let downOff = 0;


showBoard();
function showBoard() {
    app.innerHTML = /*HTML*/`
        <div class="board">
            <div class="square">${imageIndex[imageSquare%4]}</div>
            <div class="square">${imageIndex[(imageSquare+3)%4]}</div>
            <div class="square">${imageIndex[(imageSquare+2)%4]}</div>
            <div class="square">${imageIndex[(imageSquare+1)%4]}</div>
        </div>
        <div class="buttons">
            <button ${buttonOff[upOff]} onclick="handleClick('Up')">▲</button>
            <div>
            <button ${buttonOff[leftOff]} onclick="handleClick('Left')">◀</button>
                <button ${buttonOff[rightOff]} onclick="handleClick('Right')">▶</button>
                </div>
            <button ${buttonOff[downOff]} onclick="handleClick('Down')">▼</button>
        </div>
    `
}

function handleClick(direction) {
    switch (direction) {
        case "Up":
            imageSquare -= 2;
            upOff = 1;
            downOff = 0;
            break;
        case "Left":
            imageSquare -= 1;
            leftOff = 1;
            rightOff = 0;
            break;
        case "Right":
            imageSquare += 1;
            rightOff = 1;
            leftOff = 0;
            break;
        case "Down":
            imageSquare += 2;
            downOff = 1;
            upOff = 0;
            break;
    }
    showBoard();
}
