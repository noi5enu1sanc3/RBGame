const square = document.querySelector('.square');
const lense = document.querySelector('.lense');

const controlsSquare = document.querySelector('.controls__square');
const controlsLense = document.querySelector('.controls__lense');

const rInputSquare = controlsSquare.querySelector('#numberInputR_square');
const gInputSquare = controlsSquare.querySelector('#numberInputG_square');
const bInputSquare = controlsSquare.querySelector('#numberInputB_square');

const rOutputSquare = controlsSquare.querySelector('.slider__outputR-sq');
const gOutputSquare = controlsSquare.querySelector('.slider__outputG-sq');
const bOutputSquare = controlsSquare.querySelector('.slider__outputB-sq');

const rOutputLense = controlsLense.querySelector('.slider__outputR-le');
const gOutputLense = controlsLense.querySelector('.slider__outputG-le');
const bOutputLense = controlsLense.querySelector('.slider__outputB-le');

const rInputLense = controlsLense.querySelector('#numberInputR_lense');
const gInputLense = controlsLense.querySelector('#numberInputG_lense');
const bInputLense = controlsLense.querySelector('#numberInputB_lense');

const playButton = document.querySelector('.controls__play-btn');
const resultButton = document.querySelector('.controls__result-btn');


let rCol;
let gCol;
let bCol;

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
    return Math.floor(Math.random() * (max - min + 1)) + min; //Max and min included
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

const setSquareColor = () => {
    setRandomlColor(square);
}

function hideElement (element) {
    element.style.opacity = '0';
}

function showElement (element) {
    element.style.opacity = '1';
}

function playGame () {
    controlsSquare.classList.add('controls_state_moving-out');
    hideElement(controlsSquare);
    controlsLense.classList.add('controls_state_centered');
    hideElement(lense);
    setSquareColor();
    setTimeout(setInputsOutputs, 1000, rInputSquare, gInputSquare, bInputSquare, rOutputSquare, gOutputSquare, bOutputSquare);
    resetColors(lense, 0, rInputLense, gInputLense, bInputLense, rOutputLense, gOutputLense, bOutputLense);
}

function showResult () {
    showElement(lense);
    controlsLense.classList.remove('controls_state_centered');
    controlsSquare.classList.remove('controls_state_moving-out');
    showElement(controlsSquare);
}

const SetLenseColor = () => {
    rCol = rInputLense.value;
    gCol = gInputLense.value;
    bCol = bInputLense.value;
    rOutputLense.textContent = rInputLense.value;
    gOutputLense.textContent = gInputLense.value;
    bOutputLense.textContent = bInputLense.value;
    lense.style.backgroundColor = `rgb(${rCol}, ${gCol}, ${bCol})`;
}

playButton.addEventListener('click', playGame);
resultButton.addEventListener('click', showResult);

rInputLense.addEventListener('change', SetLenseColor);
gInputLense.addEventListener('change', SetLenseColor);
bInputLense.addEventListener('change', SetLenseColor);
