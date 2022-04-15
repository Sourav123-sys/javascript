//----break,continue
// let a = [5,7,8,9,1,10,11,12]
// for (i = 0; i < a.length; i++) {
//    element = a[i];
//    if(element ==10){
//        break ;
//    }
//    console.log(element)
// }

//---------remove duplicate items from an array
 
function dupliCate(array){
    let item = [];
    for(i = 0; i < array.length; i++) {
      
       element = array[i];
     if(item.indexOf(element) ==-1) {
         item.push(element);
     }
  
    }
  return item;
}
let remove=dupliCate([5,2,7,7,8,9,1,3])
//console.log(remove);

//--for loop shortcut
let extra = [4,7,5,9,3,7]
// for(let i = 0; i < array.length; i++) {
//     element = array[i];
//    console.log(element)
// }


for(const Array of extra){
   // console.log(Array) 
}

//------10 er upor man gula onno array te dekabe

let solve = [30,80,40,80,60,5,2,4,9,7]
let store=[];
for (let i = 0; i < solve.length; i++) {
  
  if(solve[i]>30){
 store.push(solve[i]);
//  element = solve[i];
//console.log(element);

  }

}
console.log(store);


