const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');

// const btn_comprar = document.querySelectorAll('button.bt-comprar');
// btn_comprar.forEach(element => element.style.display = 'none');

//onmouseenter e onmouseleave
//object.onmouseenter = function(){myScript};
//object.addEventListener('mouseenter', myScript);
//card1.onmouseenter = () => showButton(card1);

//MOSTRA O BOTÃO
card1.addEventListener('mouseenter', () => {document.querySelector('#card1 button.bt-comprar').style.display = 'block'});
card2.addEventListener('mouseenter', () => {document.querySelector('#card2 button.bt-comprar').style.display = 'block'});
card3.addEventListener('mouseenter', () => {document.querySelector('#card3 button.bt-comprar').style.display = 'block'});
card4.addEventListener('mouseenter', () => {document.querySelector('#card4 button.bt-comprar').style.display = 'block'});

//ESCONDE O BOTÃO
card1.addEventListener('mouseleave', () => {document.querySelector('#card1 button.bt-comprar').style.display = 'none'});
card2.addEventListener('mouseleave', () => {document.querySelector('#card2 button.bt-comprar').style.display = 'none'});
card3.addEventListener('mouseleave', () => {document.querySelector('#card3 button.bt-comprar').style.display = 'none'});
card4.addEventListener('mouseleave', () => {document.querySelector('#card4 button.bt-comprar').style.display = 'none'});

// const showButton = (obj) => {obj.innerHTML += `<button type='button' class='bt-comprar'>COMPRAR AGORA</button>`}


//Modal Section

const openModalFunc = document.querySelector('#abrirModal');
const closeModalFunc = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');

openModalFunc.onclick = function () {
	modal.style.display = 'flex';
	modal.showModal();
}
closeModalFunc.onclick = function () {
	modal.close();
	modal.style.display = 'none';
}


//Foram 03:00 horas para descobrir que o Bootstrap estava quebrando a TAG dialog, e apenas 01:30 para fazer todo o resto...
