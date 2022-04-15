//problem-solving.1 :- ana to vori
function anaToVori(ana) {
    // if the user input any input except the number
   if(typeof ana !="number"  ){
       return "error!! please enter a number"
   }
   //if the user input any input number except greater than 0
   if(ana<=0){
       return "error!! please enter a positive number greater than 0"
   }

    let vori = ana / 16
    return vori;

}
// let check = anaToVori(32)
// console.log(check)




//problem-solving.2 :- pandaCost
function pandaCost(singara, somucha, jilapi) {
  
  
 // if the user input any input except the number
    if(typeof singara !="number"){
        return "error!! please enter a number"
    }
     // if the user input any input except the number
    if(typeof somucha !="number"){
        return "error!! please enter a number"
    }
     // if the user input any input except the number
    if(typeof jilapi !="number"){
        return "error!! please enter a number"
    }
    // if the user input 0 in 3 variables
    if(singara == 0 && jilapi==0 && somucha==0 ){
        return "error!! please enter at least one variable value greater than 0"
    }
    //if the user input negative number
    if(singara<0){
        return "error!! please enter a positive number"
    }
    //if the user input negative number
    if(somucha<0){
        return "error!! please enter a positive number"
    }
    //if the user input negative number
    if(jilapi<0){
        return "error!! please enter a positive number"
    }

    const singaraPrice = 7;
    const somuchaPrice = 10;
    const jilapiPrice = 15;


    const singaraQuantity = singara * singaraPrice;
    const somuchaQuantity = somucha * somuchaPrice;
    const jilapiQuantity = jilapi * jilapiPrice;

    const totalCost = singaraQuantity + somuchaQuantity + jilapiQuantity
    return totalCost
}
// let bill = pandaCost(4,-5,6)
//  console.log(bill)

//problem-solving.4 :-oddFriend
function oddFriend(names) {
 if(Array.isArray(names)){


  //if user input an empty array
if(names.length==0){
    return `error!! there is no elements in this array.
    fill up the array with at least one odd name for finding odd name from a list`
}
    for (const name of names) {
       // console.log(name)
 //if the user input any input  except string
       if(typeof name !== 'string'){
        return "error!! please enter string type  array"
    }
//if user input except letter type string
    if(!isNaN(name)){
        return "error!! please enter letter type string"
    }
        if (name.length % 2 != 0) {
          
            return name;
           

        }
     
    }
  }
  //if the user input any input except an array
  else{
      return "error!! please enter a  array" 
  }
   //if user input evenName
   return `Opps!! there is even name in your list.
    If you want to find odd name from list then input some odd name`
}

// const nameList = oddFriend(["sourav","arefin","khan","asraf","rafi"])
//  console.log(nameList)


