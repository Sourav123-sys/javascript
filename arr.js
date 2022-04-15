// let name =['x','y','z',10]

// name.unshift("b")
//  let length=name.length
//  console.log(length)
//  console.log(name)
//  let index = name.indexOf('y')
//  console.log(index)

//-----------------------

// let phy = 15;

// if(40<phy && phy<50){
//     console.log("you got b+")
// }
// else if(51<phy && phy<60){
//     console.log("you got a-")
// }
// else if(81<phy && phy<100){
//     console.log("you got a+")
// }
// else{
//     console.log("you are fail")
// }

//-----------------
//inch-feet
function inchToFeet(inches){
    let feet = inches/12;
    return feet;
}
let myInches = inchToFeet(144)
//console.log(`my inches in to feet is ${myInches}`)

//-------------------------

//odd,even

function number(n){
    if(n%2 ==0){
        total=(`${n} is even`)
      console.log(total)
        return true;
    }
    else{
        total=(`${n} is odd`)
        return total;

    }
}

let age = number(20)
console.log(age)

//-----------------------


//factorial

function getFactorial(n){
    let factorial =1;
//10! = 10*9*8*7*6*5*4*3*2*1
    for (i = 1;i<=n;i++) {
       // console.log(`i = ${i}`)
        factorial = factorial *i
    //console.log(factorial)
      
    }
 return factorial;
}
let my=getFactorial(5)
console.log(my);

//reverse factorial
function getFact(num) {
    let fact = 1;
    let i = num;

    while (i >= 1) {
        fact = fact*i;
        i--;
        //console.log(fact)
    }
 return fact;
  
}
let got = getFact(7)
console.log(got)


function interest(p,t,r){
    let done = ((p*t*r)/100)
    return done;
}


let allInterests =interest(70,5,1)
console.log(allInterests)

//---------------------------
