const imagesContainer = document.querySelector('.images');

const house = imagesContainer.querySelector('.images__house');
const graffiti = imagesContainer.querySelector('.images__paint');

const controlsHouse = document.querySelector('.controls__house');
const controlsGraffiti = document.querySelector('.controls__paint');

const rInputHouse = controlsHouse.querySelector('#numberInputR_house');
const gInputHouse = controlsHouse.querySelector('#numberInputG_house');
const bInputHouse = controlsHouse.querySelector('#numberInputB_house');

const rOutputHouse = controlsHouse.querySelector('.slider__outputR-house');
const gOutputHouse = controlsHouse.querySelector('.slider__outputG-house');
const bOutputHouse = controlsHouse.querySelector('.slider__outputB-house');

const rOutputGraffiti = controlsGraffiti.querySelector('.slider__outputR-paint');
const gOutputGraffiti = controlsGraffiti.querySelector('.slider__outputG-paint');
const bOutputGraffiti = controlsGraffiti.querySelector('.slider__outputB-paint');

const rInputGraffiti = controlsGraffiti.querySelector('#numberInputR_paint');
const gInputGraffiti = controlsGraffiti.querySelector('#numberInputG_paint');
const bInputGraffiti = controlsGraffiti.querySelector('#numberInputB_paint');

const miliciya = imagesContainer.querySelector('.images__miliciya');

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

function setRandomColor (element) {
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

const setRandomHouseColor = () => {
    setRandomColor(house);
}

function hideElement (element) {
    element.style.opacity = '0';
}

function showElement (element) {
    element.style.opacity = '1';
}

function playGame () {
    controlsHouse.classList.add('controls_state_moving-out');
    hideElement(controlsHouse);
    controlsGraffiti.classList.add('controls_state_centered');
    hideElement(graffiti);
    setRandomHouseColor();
    setTimeout(setInputsOutputs, 1000, rInputHouse, gInputHouse, bInputHouse, rOutputHouse, gOutputHouse, bOutputHouse);
    resetColors(graffiti, 0, rInputGraffiti, gInputGraffiti, bInputGraffiti, rOutputGraffiti, gOutputGraffiti, bOutputGraffiti);
}

function showResult () {
    showElement(graffiti);
    controlsGraffiti.classList.remove('controls_state_centered');
    controlsHouse.classList.remove('controls_state_moving-out');
    showElement(controlsHouse);
}

const setGraffitiColor = () => {
    rCol = rInputGraffiti.value;
    gCol = gInputGraffiti.value;
    bCol = bInputGraffiti.value;
    rOutputGraffiti.textContent = rInputGraffiti.value;
    gOutputGraffiti.textContent = gInputGraffiti.value;
    bOutputGraffiti.textContent = bInputGraffiti.value;
    graffiti.style.backgroundColor = `rgb(${rCol}, ${gCol}, ${bCol})`;
}

const setHouseColor = () => {
    rCol = rInputHouse.value;
    gCol = gInputHouse.value;
    bCol = bInputHouse.value;
    rOutputHouse.textContent = rInputHouse.value;
    gOutputHouse.textContent = gInputHouse.value;
    bOutputHouse.textContent = bInputHouse.value;
    house.style.backgroundColor = `rgb(${rCol}, ${gCol}, ${bCol})`;
}

function addVibrateAnimation (element) {
    element.classList.add('vibrate');
}

function removeVibrateAnimation (element) {
    element.classList.remove('vibrate');
}

playButton.addEventListener('click', playGame);
resultButton.addEventListener('click', showResult);

resultButton.addEventListener('click', () => addVibrateAnimation(miliciya));
playButton.addEventListener('click', () => removeVibrateAnimation(miliciya));

rInputGraffiti.addEventListener('change', setGraffitiColor);
gInputGraffiti.addEventListener('change', setGraffitiColor);
bInputGraffiti.addEventListener('change', setGraffitiColor);

rInputHouse.addEventListener('change', setHouseColor);
gInputHouse.addEventListener('change', setHouseColor);
bInputHouse.addEventListener('change', setHouseColor);
