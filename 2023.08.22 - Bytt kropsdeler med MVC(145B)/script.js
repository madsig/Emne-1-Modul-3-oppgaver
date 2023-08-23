//model
const heads = ["img/head1.png", "img/head2.png", "img/head3.png", "img/head4.png"];
const bodys = ["img/body1.png", "img/body2.png", "img/body3.png", "img/body4.png"];
const legs = ["img/legs1.png", "img/legs2.png", "img/legs3.png", "img/legs4.png"];
let headNr = 0;
let bodyNr = 0;
let legsNr = 0;

//view
showGame();
function showGame(){
    document.getElementById('cardGame').innerHTML = /*html*/`    
        <div id="head" class="bodyPart">
            <button onclick="handleChange('head', 'left')">◀</button>
            <img src="${heads[headNr]}" />
            <button onclick="handleChange('head', 'right')">▶</button>
        </div>
        <div id="body" class="bodyPart">
            <button onclick="handleChange('body', 'left')">◀</button>
            <img src="${bodys[bodyNr]}" />
            <button onclick="handleChange('body', 'right')">▶</button>
        </div>
        <div id="legs" class="bodyPart">
            <button onclick="handleChange('legs', 'left')">◀</button>
            <img src="${legs[legsNr]}" />
            <button onclick="handleChange('legs', 'right')">▶</button>
        </div>
    `;
}

//controller
function handleChange(part, direction) {
    switch(part) {
        case "head":
            headNr += direction == "right" ? 1 : -1
            break;
        case "body":
            bodyNr += direction == "right" ? 1 : -1
            break;
        case "legs":
            legsNr += direction == "right" ? 1 : -1
            break;
    }
    if (headNr === 4) headNr = 0;
    if (headNr === -1) headNr = 3;
    if (bodyNr === 4) bodyNr = 0;
    if (bodyNr === -1) bodyNr = 3;
    if (legsNr === 4) legsNr = 0;
    if (legsNr === -1) legsNr = 3;
    showGame();
}