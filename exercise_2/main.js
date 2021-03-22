let celsius;
let temp;

const fr = (c) => {
    celsius = c;
    temp = (c * 1.8)+ 32;
}
fr(10);
console.log(`${celsius}C to ${temp}F`);