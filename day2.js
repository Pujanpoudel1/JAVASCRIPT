// const names = ["Rajan", "Ujjawl", "Dryam"];
// names[3] = "Rani";
// console.log(names);

// const days = [" Sunday", "Monday", "Tuesday"];
// console.log(days[1]);
// days[3] = "Wednesday";
// days.push("Thursday"); //add content at last
// days.pop("Tuesday");  //remove content from last
// days.unshift("Saturday"); //add content from start
// days.shift("Saturday"); //remove content from start
// console.log(days);
// days.shit --> method
// shift()--> function
// days.length--> properties
// console.log(days.length);

// slice splice split 

// const numbers=[1,2,3,4,5]
//slice--> used to create a coopy of a portion of the array. It doesnt modify the original array
// const newSliceArray = numbers.slice(1,4)
// slice(startINdex,endIndex)
// console.log(numbers)
// console.log(newSliceArray)
// console.log(numbers)

//splice-->is used to change the content of an array by removing or replacing existing and/ or adding new elements
//splice(startIndex, deleteCount,newItem)

// const numbers=[1,2,3,4,5]
// let splicedNum = numbers.splice(2,1,10,34)
// console.log(splicedNum)
// console.log(numbers)

//split
// let text ="I am the Danger"
// const newArray = text.split(" ")
// console.log(newArray)

const person ={
    name : "Pujan Poudel",
    address : "KTM",
    phone : 98000000,
    age : 22
}
// console.log(Object.keys(person))
// console.log(Object.values(person))
// Object.freeze(person)
person.name ="Poudel"
console.log(person)