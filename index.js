// question a-c

// creating student array 
const myStudent = ["Emmanuel", "John", "Philip", "Nathan", "Jeff", "Simon", "Daniel", "Raymond", "Tobi", "Segun"]

// For Loop iterates over all the students in thhe array
for(let student = 0; student < 10; student++){
    console.log(`Student ${student+1}: ${myStudent[student]}`)
}
console.log("\n")
//result
// Student 1: Emmanuel
// Student 2: John
// Student 3: Philip
// Student 4: Nathan
// Student 5: Jeff
// Student 6: Simon
// Student 7: Daniel
// Student 8: Raymond
// Student 9: Tobi
// Student 10: Segun





// Question d-e
// created an object called caustomer
const customer = {
    name: "Emmanuel", 
    age: 12, 
    married: false, 
    location: "Kaduna"
}
//console logged each property in the object
console.log(`Name is ${customer.name}`)
console.log(`Age is ${customer.age}`)
console.log(`Married is ${customer.married}`)
console.log(`Location is ${customer.location}`)


//result
// Name is Emmanuel
// Age is 12
// Married is false
// Location is Kaduna
