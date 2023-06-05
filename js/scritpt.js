let result = document.querySelector('.result');
const btn = document.querySelector('.roll');
let qty = document.querySelector('.qty');
const list = document.querySelectorAll('li');

const roll = () => {
    let dinner = Math.floor(Math.random() * list.length);

    result.textContent = list[dinner].innerText;
};

const qtyOfDinner = () => {
    qty.textContent = list.length;
};

qtyOfDinner();
btn.addEventListener('click', roll);
