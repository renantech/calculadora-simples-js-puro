const inputCalc = document.querySelector('.input-calc');

function clearDisplay(btn) {
    btn = inputCalc.value = '';
}

function calculate() {
    inputCalc.value = eval(inputCalc.value);
}

document.addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains('btn-num')) inputCalc.value += el.value;

    if (el.classList.contains('btn-add')) inputCalc.value += el.value;

    if (el.classList.contains('btn-min')) inputCalc.value += el.value;

    if (el.classList.contains('btn-mult')) inputCalc.value += el.value;

    if (el.classList.contains('btn-div')) inputCalc.value += el.value;

    if (el.classList.contains('btn-aws')) calculate();

    if (el.classList.contains('btn-clear')) clearDisplay(el.value);
});