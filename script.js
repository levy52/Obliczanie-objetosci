const stozekBtn = document.getElementById('stozek');
const walecBtn = document.getElementById('walec');
const kulaBtn = document.getElementById('kula');
const kulaShow = document.querySelector('.kula-con');
const stozekShow = document.querySelector('.stozek-con');
const walecShow = document.querySelector('.walec-con');
const pi = 3.14;
const stozekRInuput = document.getElementById('stozek-lenght-r');
const stozekHeightInuput = document.getElementById('stozek-height');
const walecRInuput = document.getElementById('walec-lenght-r');
const walecHeightInuput = document.getElementById('walec-height');
const kulaRInuput = document.getElementById('kula-lenght-r');
const btnCalcStozek = document.getElementById('btn-calc-stozek');
const scoreStozek = document.getElementById('score-stozek');
const btnCalcWalec = document.getElementById('btn-calc-walec');
const scoreWalec = document.getElementById('score-walec');
const btnCalcKula = document.getElementById('btn-calc-kula');
const scoreKula = document.getElementById('score-kula');
let result;

const showStozek = () => {
    stozekShow.classList.add('show'); 
    walecShow.classList.remove('show');
    kulaShow.classList.remove('show');
    stozekRInuput.value = '';
    stozekHeightInuput.value = '';
    scoreStozek.innerHTML= '';
}

const showWalec = () => {
    walecShow.classList.add('show'); 
    stozekShow.classList.remove('show');
    kulaShow.classList.remove('show');
    walecRInuput.value = '';
    walecHeightInuput.value = '';
    scoreWalec.innerHTML= '';
}

const showKula = () => {
    kulaShow.classList.add('show'); 
    walecShow.classList.remove('show');
    stozekShow.classList.remove('show');
    kulaRInuput.value = '';
    scoreKula.innerHTML= '';
}

const stozekV = () => {
    if (!stozekRInuput.value || !stozekHeightInuput.value) {
        alert("Uzupełnij Dane!");
    } else {
    radius = stozekRInuput.value;
    height = stozekHeightInuput.value;
    result = 1/3*pi*(radius*radius)*height;
    scoreStozek.innerHTML='Objętość stożka wynosi: ' + result.toFixed(2); 
}
}

const walecV = () => {
    if (!walecRInuput.value || !walecHeightInuput.value){
        alert("Uzupełnij Dane!");
    } else {
    radius = walecRInuput.value;
    height = walecHeightInuput.value;
    result = pi*(radius*radius)*height;
    scoreWalec.innerHTML='Objętość walca wynosi: ' + result.toFixed(2);
    }
}

const kulaV = () => {
    if (!kulaRInuput.value){
        alert("Uzupełnij Dane!");
    } else {
    radius = kulaRInuput.value;
    result = 4/3*pi*(radius*radius*radius);
    scoreKula.innerHTML='Objętość kuli wynosi: ' + result.toFixed(2);
    }
}


kulaBtn.addEventListener('click', showKula);
walecBtn.addEventListener('click', showWalec);
stozekBtn.addEventListener('click', showStozek);
btnCalcStozek.addEventListener('click', stozekV);
btnCalcWalec.addEventListener('click', walecV);
btnCalcKula.addEventListener('click', kulaV);