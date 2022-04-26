const square = document.querySelector('.square');
const lense = document.querySelector('.lense');

const controlsSq = document.querySelector('.controls__square');
const controlsLe = document.querySelector('.controls__lense');

const rInputSq = controlsSq.querySelector('#numberInputR_square');
const gInputSq = controlsSq.querySelector('#numberInputG_square');
const bInputSq = controlsSq.querySelector('#numberInputB_square');

const rOutputSq = controlsSq.querySelector('.slider__outputR-sq');
const gOutputSq = controlsSq.querySelector('.slider__outputG-sq');
const bOutputSq = controlsSq.querySelector('.slider__outputB-sq');

const rOutputLe = controlsLe.querySelector('.slider__outputR-le');
const gOutputLe = controlsLe.querySelector('.slider__outputG-le');
const bOutputLe = controlsLe.querySelector('.slider__outputB-le');

const rInputLe = controlsLe.querySelector('#numberInputR_lense');
const gInputLe = controlsLe.querySelector('#numberInputG_lense');
const bInputLe = controlsLe.querySelector('#numberInputB_lense');

const playButton = document.querySelector('.controls__play-btn');
const resultButton = document.querySelector('.controls__result-btn');


let rCol;
let gCol;
let bCol;

let opacity = 1;

// function renderInitialElements () {
//     controlsSq.style.display = 'none';
//     controlsLe.classList.add('controls_state_centered_type_start');
//     setRandomlColor(square);
//     setRandomlColor(lense);
// }

function resetColors (element, color, rInput, gInput, bInput, rOutput, gOutput, bOutput) {
    element.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    rInput.value = color;
    gInput.value = color;
    bInput.value = color;
    rOutput.textContent = color;
    gOutput.textContent = color;
    bOutput.textContent = color;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function setRandomlColor (element) {
    rCol = getRandomIntInclusive(0, 255);
    gCol = getRandomIntInclusive(0, 255);
    bCol = getRandomIntInclusive(0, 255);
    element.style.backgroundColor = `rgb(${rCol}, ${gCol}, ${bCol})`;
    element.style.boxShadow = `rgba(${rCol}, ${gCol}, ${bCol}, 0.45) 0px 25px 20px -20px`;
}

function setInputsOutputs (rInput, gInput, bInput, rOutput, gOutput, bOutput) {
    rInput.value = rCol;
    gInput.value = gCol;
    bInput.value = bCol;
    rOutput.textContent = rCol;
    gOutput.textContent = gCol;
    bOutput.textContent = bCol;
}

const setSqColor = () => {
    setRandomlColor(square);
}

function hideElement (element) {
    element.style.opacity = '0';
}

function showElement (element) {
    element.style.opacity = '1';
}

function playGame () {
    controlsSq.classList.add('controls_state_moving-out');
    hideElement(controlsSq);
    controlsLe.classList.add('controls_state_centered');
    hideElement(lense);
    setSqColor();
    setTimeout(setInputsOutputs, 1000, rInputSq, gInputSq, bInputSq, rOutputSq, gOutputSq, bOutputSq);
    //setInputsOutputs(rInputSq, gInputSq, bInputSq, rOutputSq, gOutputSq, bOutputSq);
    resetColors(lense, 0, rInputLe, gInputLe, bInputLe, rOutputLe, gOutputLe, bOutputLe);
}



function showResult () {
    showElement(lense);
    controlsLe.classList.remove('controls_state_centered');
    controlsSq.classList.remove('controls_state_moving-out');
    showElement(controlsSq);
}

const SetLeColor = () => {
    rCol = rInputLe.value;
    gCol = gInputLe.value;
    bCol = bInputLe.value;
    rOutputLe.textContent = rInputLe.value;
    gOutputLe.textContent = gInputLe.value;
    bOutputLe.textContent = bInputLe.value;
    lense.style.backgroundColor = `rgb(${rCol}, ${gCol}, ${bCol})`;
}

playButton.addEventListener('click', playGame);
resultButton.addEventListener('click', showResult);

rInputLe.addEventListener('change', SetLeColor);
gInputLe.addEventListener('change', SetLeColor);
bInputLe.addEventListener('change', SetLeColor);

//window.addEventListener('load', renderInitialElements);
