// // remove five 

// let a = [5,7,8,9,1,10,11,12]
// for (i = 0; i < a.length; i++) {
//    element = a[i];
//    if(element ==5){
//        continue ;
//    }
// //console.log(element)
// }

//  remove 10
// let b = [1,2,5,4,8,10,6,8,9]
// for (i = 0; i < b.length; i++) {
//    element = b[i];
//    if(element ==6){
//       break ;
//    }
//    console.log(element)
// }

//  array er modde duplicate man thakle seta remove kore dben.
//example ; [5,2,7,7,8,9,1,3]...ekane 7 duibar theke ekbar dekaben,,,[5,2,7,8,9,1,3]...erkm

//  [30,80,40,80,60,5,2,4,9,7]  30 er upr sonkha gula notun array te dekaben

////negative man ag porjnto sob positive man dekanu
//example:  [5,7,3,8,-4,2,4,-6] ,,ans :[5,7,3,8]




// variable er man gula exchange krben..
// example : a = 7; b = 6;  ans : a=6;b =7

//   reverse string

// first e ekta empty string nben...trpr loop er maddome sb letter k alada
// krben..trpr empty string er sthe string er letter gula jug kore dben


let print = 'my name is khan'

let letters = ''
for(let element of print){ // for (i=0;i<print.length;i++){element = print[i]}
 
   console.log(element)
   letters =   element +letters
   
}
console.log(letters)