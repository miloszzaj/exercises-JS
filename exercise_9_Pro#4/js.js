const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPass = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special))
    {p.innerHTML = 'masz dobre hasło'
    p.style.color = 'green'}
 else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers))
    {p.innerHTML = 'masz całkiem dobre hasło'
    p.style.color = 'gold'}
 else {
    {p.innerHTML = 'masz słabe hasło'
    p.style.color = 'red'}
 }
}

const fn1 = () => {
    if(pass.value !== "") {
        checkPass();
    } else {
        p.innerHTML = 'nie ma hasła'
        p.style.color = ''
    }
}

pass.addEventListener('keyup', fn1)