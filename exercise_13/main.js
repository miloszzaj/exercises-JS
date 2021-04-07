const newUser = {
    // name: 'Miłosz',
    age: 200,

}

newUser.country = 'Poland'
newUser['fav-color'] = 'black'

const name = 'dropsik'
const age = 5

const dog = {
    name,
    age : age
}

function User (name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.hello = function() {
    console.log('użytkownik ma imię ${this.name}');
    }
User.prototype.country = 'Poland';


const newUser1 = new User('Klaudia', 23);
