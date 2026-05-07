let slider1 = document.getElementById('myRange');
let slider2 = document.getElementById('myRange2');
let slider3 = document.getElementById('myRange3');
let slider4 = document.getElementById('myRange4');
let slider5 = document.getElementById('myRange5');
let slider6 = document.getElementById('myRange6');
let slider7 = document.getElementById('myRange7');
let slider8 = document.getElementById('myRange8');
let slider9 = document.getElementById('myRange9');
let slider10 = document.getElementById('myRange10');
let slider11 = document.getElementById('myRange11');
let slider12 = document.getElementById('myRange12');
let slider13 = document.getElementById('myRange13');
let slider14 = document.getElementById('myRange14');
let slider15 = document.getElementById('myRange15');
let slider16 = document.getElementById('myRange16');
let slider17 = document.getElementById('myRange17');
let slider18 = document.getElementById('myRange18');
let slider19 = document.getElementById('myRange19');
let slider20 = document.getElementById('myRange20');
let slider21 = document.getElementById('myRange21');
let slider22 = document.getElementById('myRange22');
let slider23 = document.getElementById('myRange23');
let slider24 = document.getElementById('myRange24');
let slider25 = document.getElementById('myRange25');

function getBlockingSliderForCase(caseValue) {
    switch (caseValue) {
        case 4: return slider24;
        case 7: return slider23;
        case 12: return slider22;
        case 16: return slider21;
        case 19: return slider20;
        case 24: return slider19;
        case 28: return slider18;
        case 32: return slider17;
        case 36: return slider16;
        case 41: return slider15;
        case 44: return slider14;
        case 48: return slider13;
        case 52: return slider12;
        case 56: return slider11;
        case 61: return slider10;
        case 64: return slider9;
        case 68: return slider8;
        case 73: return slider7;
        case 76: return slider6;
        case 81: return slider5;
        case 85: return slider4;
        case 89: return slider3;
        case 93: return slider2;
        case 97: return slider1;
    }
}

function isSliderBlocking(slider) {
    let value = Number(slider.value);
    return value > 43 && value < 62;
}

function updateVerticalLock() {
    let currentCase = Number(slider25.value);
    let blockingSlider = getBlockingSliderForCase(currentCase);

    if (!blockingSlider) {
        slider25.disabled = false;
        return;
    }

    slider25.disabled = isSliderBlocking(blockingSlider);
}

// function getSliderPos() {

//     console.log(slider24.value);

// }

slider25.addEventListener('input', updateVerticalLock);
slider24.addEventListener('input', updateVerticalLock);
slider23.addEventListener('input', updateVerticalLock);
slider22.addEventListener('input', updateVerticalLock);
slider21.addEventListener('input', updateVerticalLock);
slider20.addEventListener('input', updateVerticalLock);
slider19.addEventListener('input', updateVerticalLock);
slider18.addEventListener('input', updateVerticalLock);
slider17.addEventListener('input', updateVerticalLock);
slider16.addEventListener('input', updateVerticalLock);
slider15.addEventListener('input', updateVerticalLock);
slider14.addEventListener('input', updateVerticalLock);
slider13.addEventListener('input', updateVerticalLock);
slider12.addEventListener('input', updateVerticalLock);
slider11.addEventListener('input', updateVerticalLock);
slider10.addEventListener('input', updateVerticalLock);
slider9.addEventListener('input', updateVerticalLock);
slider8.addEventListener('input', updateVerticalLock);
slider7.addEventListener('input', updateVerticalLock);
slider6.addEventListener('input', updateVerticalLock);
slider5.addEventListener('input', updateVerticalLock);
slider4.addEventListener('input', updateVerticalLock);
slider3.addEventListener('input', updateVerticalLock);
slider2.addEventListener('input', updateVerticalLock);
slider1.addEventListener('input', updateVerticalLock);

updateVerticalLock();