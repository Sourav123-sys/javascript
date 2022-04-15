
//negative man ag porjnto sob positive man dekanu
let array = [5,7,3,8,-4,2,-4,-6]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element > 0){

        positive = element;
        console.log(positive);
    }
    else if(element < 0){
       break;
       
    }
}


//-reverse string
let print = 'my name is khan'
//console.log(print[0])
let letters = ''
for(let element of print){
 
   console.log(element)
   letters =   element +letters
   
}
console.log(letters)


