let array = [4,7,9,6,10,21]
let first = array[0]
let second;

for (i = 0;i<array.length;i++) {
   element = array[i]
   console.log(element)
  if(element>first) {
      second = first;
      first = element
} else if(element> second) {
   
    second = element
} 
}

console.log(first)
console.log(second)



//find largest name
function friendsName(list) {

let store = [];
let compare=list[0];
let again=[]
for(let i = 0; i <list.length; i++){
    element = list[i];
    if(element.length>compare.length){
      compare= element
    }
    else if(element.length == compare.length){
        again.push(element);
       
    }
}
store.push(compare);
console.log(again)
return store

}
let value = friendsName(['arefin','sourav',"khan",'lm'])
console.log(value)