const arr = [{
  id: 1,
  isCompelete: true,
  text: "lfvlvrlgrtgrt"
},
{
  id: 2,
  isCompelete: true,
  text: "lttltlflrldf",
},
{
  id: 3,
  isCompelete: false,
  text: "ffffrrrgggggg",
}
]

arr.forEach(function(i){
  console.log(i.id)
})

const toDo= arr.map(function(i){
  return i.text
})
console.log(toDo)

const isCompeleted= arr.filter(function(i){
  return i.isCompelete === true;
}).map(function(i){
  return i.text
})
console.log(isCompeleted)

//
const add = (n1 = 1, n2 = 1) => n1 + n2;

console.log(add(5, 5));

var myObject = { id: 1, text: "this is", isComplete: true };

Object.keys(myObject).reduce(function (key, index) {
    myObject[key];
});

console.log(myObject);

const object1 = {
    id: 1,
    text: "this is a text",
    isCompeleted: true,
};

for (const [key, value] of Object.entries(object1)) {

    console.log(`${key}: ${value}`);
}
//constraction

function Car(model, color, create) {
    this.model = model;
    this.color = color;
    this.create = new Date(create);
    this.getFullYear = function () {
        return this.create.getFullYear();
    }
    this.getFullType = function () {
        return `${this.model} ${this.color}`
    }

}

const car1 = new Car("Opel", "Red", "12-3-2020");
const car2 = new Car("Toyota", "Green", "3-05-1983")

console.log(car1.create.getFullYear());

console.log("fullYear: ", car2.getFullYear());

console.log("fullType: ", car1.getFullType());


