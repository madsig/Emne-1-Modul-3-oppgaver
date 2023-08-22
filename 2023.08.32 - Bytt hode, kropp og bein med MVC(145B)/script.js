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































// function showBodyGame() {
    
//     selectHead1();
//     selectBody1();
//     selectLegs1();
// }

// function blankAll() {
//     document.getElementById('cardTools').innerHTML = '';
//     document.getElementById('cardCss').innerHTML = '';
//     document.getElementById('cardHtml').innerHTML = '';
//     document.getElementById('cardJavaScript').innerHTML = '';
//     document.getElementById('cardGame').innerHTML = '';
// }

// function selectHead1() {
//     document.getElementById('head').innerHTML = /*HTML*/`
//         <button onclick="selectHead4()">◀</button>
//         <img src="img/head1.png" />
//         <button onclick="selectHead2()">▶</button>
//     `;
// }

// function selectHead2() {
//     document.getElementById('head').innerHTML = /*HTML*/`
//         <button onclick="selectHead1()">◀</button>
//         <img src="img/head2.png" />
//         <button onclick="selectHead3()">▶</button>
//     `;
// }

// function selectHead3() {
//     document.getElementById('head').innerHTML = /*HTML*/`
//         <button onclick="selectHead2()">◀</button>
//         <img src="img/head3.png" />
//         <button onclick="selectHead4()">▶</button>
//     `;
// }

// function selectHead4() {
//     document.getElementById('head').innerHTML = /*HTML*/`
//         <button onclick="selectHead3()">◀</button>
//         <img src="img/head4.png" />
//         <button onclick="selectHead1()">▶</button>
//     `;
// }

// function selectBody1() {
//     document.getElementById('body').innerHTML = /*HTML*/`
//         <button onclick="selectBody4()">◀</button>
//         <img src="img/body1.png" />
//         <button onclick="selectBody2()">▶</button>
//     `;
// }

// function selectBody2() {
//     document.getElementById('body').innerHTML = /*HTML*/`
//         <button onclick="selectBody1()">◀</button>
//         <img src="img/body2.png" />
//         <button onclick="selectBody3()">▶</button>
//     `;
// }

// function selectBody3() {
//     document.getElementById('body').innerHTML = /*HTML*/`
//         <button onclick="selectBody2()">◀</button>
//         <img src="img/body3.png" />
//         <button onclick="selectBody4()">▶</button>
//     `;
// }

// function selectBody4() {
//     document.getElementById('body').innerHTML = /*HTML*/`
//         <button onclick="selectBody3()">◀</button>
//         <img src="img/body4.png" />
//         <button onclick="selectBody1()">▶</button>
//     `;
// }

// function selectLegs1() {
//     document.getElementById('legs').innerHTML = /*HTML*/`
//         <button onclick="selectLegs4()">◀</button>
//         <img src="img/legs1.png" />
//         <button onclick="selectLegs2()">▶</button>
//     `;
// }

// function selectLegs2() {
//     document.getElementById('legs').innerHTML = /*HTML*/`
//         <button onclick="selectLegs1()">◀</button>
//         <img src="img/legs2.png" />
//         <button onclick="selectLegs3()">▶</button>
//     `;
// }

// function selectLegs3() {
//     document.getElementById('legs').innerHTML = /*HTML*/`
//         <button onclick="selectLegs2()">◀</button>
//         <img src="img/legs3.png" />
//         <button onclick="selectLegs4()">▶</button>
//     `;
// }

// function selectLegs4() {
//     document.getElementById('legs').innerHTML = /*HTML*/`
//         <button onclick="selectLegs3()">◀</button>
//         <img src="img/legs4.png" />
//         <button onclick="selectLegs1()">▶</button>
//     `;
// }



