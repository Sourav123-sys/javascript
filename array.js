

// search value in array


let arr = [1,2,3,4,5,6,7,8,9];
var find = 15;
var found = false;

for (let i = 0; i < arr.length; i++){
    if(arr[i] == find){
        console.log('Data is found', i)
        found = true;
       // break;
    }

  
}
if (!found){
    console.log('Data is not found')
}