// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
//
//     Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну.
console.log('-----TASK 1-----');
let animal = {
    name: 'Dog',
    weight: 45,
    age: 6,
    avgSpeed: 25,
    aboutAnimal: function () {
        console.log(`Name is :${this.name}, weight is:${this.weight}, age is:${this.age}, average speed is:${this.avgSpeed}`);
    },
    timeFor1000KM: function () {
        const DISTANSE = 1000;
        let day = 0;
        let hours = DISTANSE / this.avgSpeed;
        if (hours > 12) {
            day = Math.floor(hours/12);
            hours = (hours - (day * 12)).toFixed(1); // toFixed використав для того щоб адекватно виводило години
            // (якщо,наприклад,швидкість не 25,а 33)
        }
        console.log(`Time for 1000 km: ${day} days and ${hours} hours`);
    },
    renameAnimal: function () {
        this.name = prompt('input the another animal if you want.');
        console.log(animal);
    }
}
animal.aboutAnimal();
animal.timeFor1000KM();
animal.renameAnimal();


/*
2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.*!/
*/
console.log('-----TASK 2-----');

let figure = {
    firstSide: 10,
    secondSide: 15,
    figureSquare: function () {
        console.log(`Square equal ${this.firstSide * this.secondSide} cm^2`);
    },
    figurePerimeter: function () {
        console.log(`Perimeter equal ${(this.firstSide + this.secondSide) * 2} cm`);
    },
    figureAddThirdSide: function () {
        figure.thirdSide = +prompt('Input the size of third side');
        console.log(figure);
    },
    nameOfFigure: function () {
        figure.name = prompt('Input the name of figure');
        console.log(figure);
    },
    convertToMetre: function () {
        const CONVERT = 100;
        console.log(`First side equal ${this.firstSide / CONVERT} metres, Second side equal ${this.secondSide / CONVERT} metres, Third side equal ${this.thirdSide / CONVERT} metres`)
    }
}
figure.figureSquare();
figure.figurePerimeter();
figure.figureAddThirdSide();
figure.nameOfFigure();
figure.convertToMetre();


/*3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

{

    tomato: {

        count: 5,
            price: 50,
            buy: false,
            outOfstore: true

    } , ...

}
Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
    Виводимо список покупок які ми купили.
    Додаємо функцію яка дозволить купити продукт.
    Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
Додаємо можливість збільшувати кількість товару.
    Додаємо можливість зменшувати кількість товару(менше 0 бути не може).*/

console.log('-----TASK 3-----');

let arrOfProductsInStore = [];
let arrOfProductsNotInStore = [];
let arrProductsWeBuy = [];
let arrProductsWeWantToBuy = [];
let arrProducts = [];

let products = {
    tomato: {
        count: 5,
        price: 50,
        buy: false,
        outOfStore: true
    },
    potato: {
        count: 20,
        price: 10,
        buy: true,
        outOfStore: true
    },
    cucumber: {
        count: 10,
        price: 35,
        buy: false,
        outOfStore: false
    },
    lemon: {
        count: 3,
        price: 60,
        buy: false,
        outOfStore: false
    },
    egg: {
        count: 10,
        price: 25,
        buy: true,
        outOfStore: true
    },
    apple: {
        count: 5,
        price: 30,
        buy: false,
        outOfStore: true
    },
    productsInStore: function () {
        let str = '';
        let comma = ',';
        for (let key in products) {
            if (products[key].outOfStore === true) {
                str += key + ',';
                arrOfProductsInStore = str.split(comma);
                arrOfProductsInStore.length = arrOfProductsInStore.length-1; //Скоротив довжину,тому що останній
                // елемент масиву був пустий (через кому), а поп чому не працював (???)
            }
        }
        return arrOfProductsInStore;
    },
    productsNotInStore: function () {
        let str = '';
        let comma = ',';
        for (let key in products) {
            if (products[key].outOfStore === false) {
                str += key + ',';
                arrOfProductsNotInStore = str.split(comma);
                arrOfProductsNotInStore.length = arrOfProductsNotInStore.length-1;
            }
        }
        return arrOfProductsNotInStore;
    },
    productsWeBuy: function () {
        let str = '';
        let comma = ',';
        for (let key in products) {
            if (products[key].buy === true) {
                str += key + ',';
                arrProductsWeBuy = str.split(comma);
                arrProductsWeBuy.length = arrProductsWeBuy.length-1;
            }
        }
        return arrProductsWeBuy;
    },
    productsWeWantToBuy: function () {
        let str = '';
        let comma = ',';
        for (let key in products) {
            if (products[key].buy === false) {
                let makeChoice = confirm(`Do you want to buy ${key}`);
                if (makeChoice) {
                    str += key + ',';
                    arrProductsWeWantToBuy = str.split(comma);
                    arrProductsWeWantToBuy.length = arrProductsWeWantToBuy.length-1;
                }
                console.log(arrProductsWeWantToBuy); //Продукти які ми докупили
            }
            arrProducts = arrProductsWeBuy.concat(arrProductsWeWantToBuy);
        }
        return arrProducts; // Масив продуктів що ми купили загалом
    },
    totalPrice: function (arr) {
        let price = 0;
        let summary = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let key in products) {
                if (key === arr[i]) {
                    price = products[key].count * products[key].price;
                    summary += price;
                }
            }
        }
        return summary;
    },
    changeCount: function() {
        for (let key in products) {
            if (typeof products[key] !== "function") {
                let makeChoice = confirm(`Do you want to change a count of ${key}?`);
                if (makeChoice) {
                    let newCount = +prompt (`Input the new count of ${key}`);
                    products[key].count = newCount ;
                }
            }
        }
        return products;
    }
}
console.log(products.productsInStore());
console.log(products.productsNotInStore());
console.log(products.productsWeBuy());
console.log(products.productsWeWantToBuy());
console.log(products.totalPrice(arrProducts));
console.log(products.changeCount());
console.log(products.totalPrice(arrProducts)); // Знову обраховую ціну уже зі зміненими каунтами;


/*4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.*/
console.log('-----TASK 4-----');

let people = [
    {
        name: 'Yura',
        age: 55,
        hobby: ['films', 'games', 'hiking'],
        type: 'admin'
    },
    {
        name: 'Kolia',
        age: 23,
        hobby: ['films', 'football', 'mafia'],
        type: 'student'
    },
    {
        name: 'Yulian',
        age: 28,
        hobby: ['films', 'programming', 'pizza'],
        type: 'teacher'
    },
    {
        name: 'Vlad',
        age: 25,
        hobby: ['films', 'photo', 'football'],
        type: 'admin'
    }
]

let admins = [];

let typeOfPeople = (arr) => {
    let str = '';
    let comma = ',';
    for (let i = 0; i < arr.length; i++){
        if (arr[i].type === 'admin') {
            str += arr[i].name + ', ';
            admins = str.split(comma);
            admins.length = admins.length-1;
        }
    }
    return admins;
}

let avgAge = (arr) => {
    let totalAge = 0;
    let averageAge = 0;
    for (let i = 0; i < arr.length; i++) {
        totalAge += arr[i].age;
    }
    averageAge = totalAge / arr.length;
    return averageAge;
}

let uniqueHobby = (arr) => {
    let arrUniqueHobby = [];
    let uniqueObj = {};
    let allHobby = [];
    for (let i = 0; i < arr.length; i++) {
        allHobby = allHobby.concat(arr[i].hobby);
    }
    uniqueObj = new Set(allHobby);
    arrUniqueHobby = [...uniqueObj];
    return arrUniqueHobby;
}



console.log(typeOfPeople(people));
console.log(avgAge(people));
console.log(uniqueHobby(people));

console.log('КРУТА ДОМАШКА')
