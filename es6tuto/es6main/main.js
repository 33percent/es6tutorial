"use strict"

// var , const and let
var a = 'test1';
let b = "test2";

function test() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a);
    }
    console.log(a);
}
test();

function testinglet() {
    let a = 20;
    if (true) {
        let a = 21;
        console.log(a);
    }
    console.log(a);
}
testinglet()

for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i);

const colors = [];
colors.push('red');
colors.push('blue');
colors = "green";
console.log(colors)

//var,const and let

//inheritance

class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static countusers() {
        console.log('there are 50 users');
    } register() {
        console.log(this.username + " is registered");
    }
}

// let sandeep = new user('sandeep', 'email', 'pwd');
// sandeep.register();
// user.countusers();
class member extends user {
    constructor(username, email, password, memberplan) {
        super(username, email, password);
        this.package = memberplan;
    }
    getpack() {
        console.log(this.username, this.package);
    }
}
let mike = new member('mike', 'email', 'pwd', 'tempo');
// mike.getpack();
mike.register();

//inheritance

//template literals

let name = "Sandeep";
function makeupper(word) {
    return word.toUpperCase();
}
let template = `<h1>${makeupper('hello')} , ${name}</h1> 
<p>A
 temp</p>`;

document.getElementById('divid').innerHTML = template;

//template literals

//string methods

let string = "hello, This is Sandeep and i love JS";
//startWith()
console.log(string.startsWith('hello'));
//endsWith()
console.log(string.endsWith('JS'));
//includes()
console.log(string.includes('love'));

//number methods
console.log(0xff);
//hex
console.log(0b10101);
//binary
console.log(0o543);
//hexa

console.log(Number.isFinite(Infinity));
console.log(Number.isNaN(0));
console.log(Number.isInteger("a"));

//string methods

//default params and spread operator

function news($greets = "hello world") {
    console.log($greets);
}

news()

// spread operator

let args = [1, 2, 3];
let argu = [4, 5, 6];
function test() {
    console.log(args, argu);
}
test(...args, ...argu);
//default params and spread operator

let myarr = [11, 2050, 90];
let myset = new Set(myarr);

myset.add('100');

myset.add({ A: 1, b: 2 });

myset.delete(11);

// myset.clear();

myset.add(100);
myset.add(200);
console.log(myset.size);
console.log(myset)

myset.forEach(function (data) {
    console.log(data);
});

let mymap = new Map([["a1", 'hello'], ['b1', 'byue']]);
mymap.set('c3', 'foo');
mymap.delete("a1");
console.log(mymap);

let lexo = new WeakSet();

let car3 = {
    make: 'honda',
    model: 'civic'
};

let car4 = {
    make: 'mahin',
    model: 'scor'
};
lexo.add(car3);
lexo.add(car4);
console.log(lexo);

let carweak = new WeakMap();
let key = {
    id: 1
};
let car1 = {
    make: 'honda',
    model: 'civic'
};
let key1 = {
    id: 2
};
let car2 = {
    make: 'toyota',
    model: 'innova'
};
carweak.set(key, car1);
carweak.set(key1, car2);
console.log(carweak)

//arrow functions
function prefix(prefix) {
    this.prefix = prefix;
}
prefix.prototype.prefixArray = function (arr) {
    return arr.map((x) => {
        console.log(this.prefix + x);
    });
}
let pre = new prefix('hello');
pre.prefixArray(['brad', 'jeff']);

let add = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return false;
}
add(21, 2);

//arror functions

//promises

var myprom = Promise.resolve('foo');
myprom.then((res) => console.log(res));

var mypro = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(4), 2000);

});

mypro.then((res) => {
    res += 3;
    console.log(res);
});

function getdata(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });

}
getdata('GET', 'https://jsonplaceholder.typicode.com/posts').then(function (data) {
    let todos = JSON.parse(data);
    let out = '';
    for (let todo of todos) {
        out += `
    <li>
    <h3>
    ${todo.title}</h3>
    <p>${todo.body}</p></li>
    `;
    }
    document.getElementById('template').innerHTML = out;
    console.log(data);
}).catch(function (err) {
    console.log(err);
});


//promises

//generators

function* g1() {
    console.log('hello');
    yield 'yield 1 ran';
    console.log('world');
    yield 'yield 2 ran';
    return "returned"
}
let g = g1();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

for (let data of g) {
    console.log(data);
}
//generators