const user = {
    name: 'Lily',
    age: 23,
    'fav-color': 'niebieski',
    car: {
        brand: 'Audi'
    }
}


function hello() {
    console.log(`${this.name} ma ${this.age}, a jej ulubiony kolor to ${this['fav-color']}`);
}
hello.bind(user)()

function auto(color) {
    console.log(`Jeździ samochodem marki ${this.car.brand}. Auto jest koloru ${color}`);
}
auto.call(user, 'czarny')