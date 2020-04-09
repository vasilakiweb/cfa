const blocks = document.querySelectorAll ('.akkordeon__block');
const descriptions = document.querySelectorAll ('.akkordeon__description');
const iconPlus = document.querySelectorAll ('.akkordeon__icon--plus');
const iconMinus = document.querySelectorAll ('.akkordeon__icon--minus');
let a;
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener ('click', function () {
    descriptions[i].classList.toggle ('akkordeon__description--on');
    iconMinus[i].classList.toggle ('display-none');
    iconPlus[i].classList.toggle ('display-none');
        
    });
}
