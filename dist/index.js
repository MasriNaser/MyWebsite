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