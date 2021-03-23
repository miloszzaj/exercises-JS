const num = 10;
let numbers = [];

for(let i = 0; i < num; i ++) {
    numbers.push(i)
    console.log(numbers);
}

const fn = f => {
    if(f%3 === 0 && f !== 0) {
        console.log(`${f}  jest podzielna przez 3`);
    } else {
        console.log(`${f} nie jest podzielna przez 3`);
    }
}

const numb = numbers.forEach(fn)
console.log(numb);