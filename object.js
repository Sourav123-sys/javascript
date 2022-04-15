let student1 = {
id: 121,
phone: 1798,
name:"sourav"

}

let student2 = {
    id: 122,
    phone: 1598,
    name:"arefin"
    
    }
student1.phone =123456789;
student1.email ="email@gmail.com"   // add property in object
let Name = student2.name
console.log(Name)
//console.log(student2)
console.log(student1)

function myNumbers(taka){
    console.log('numbers',taka);
    console.log('numbers value')
    let numbersPrice = 10;
    let numbersQuantity = taka/numbersPrice
    return numbersQuantity;
}

let solve = myNumbers(200)
console.log(solve)