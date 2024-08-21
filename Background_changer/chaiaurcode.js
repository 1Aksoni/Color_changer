const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
    button.addEventListener('mouseover', e => {
        const color = e.target.id;
        body.style.backgroundColor = color;
    });
});
