//Biến b coppy từ biến a


let a = {
    name:'Manh',
    age:20
};

let b = a;

// let b = {...a};

// let b = Object.assign({},a);

b.name="Huy";
b.age=22;

console.log(a);
console.log(b);


