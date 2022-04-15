


function fibonacci(n){
    if(typeof n!=="number"){
        return "please give a number"
    }
    if(n<2){
        return "please enter a positive number greater than 2"
    }
    let fibo =[ 0,1];
    for (let i = 2; i <=n; i++) {
       fibo[i] = fibo[i-1] + fibo[i-2];
        
    }
    return fibo;
}
let Fibo = fibonacci(12)
console.log(Fibo)

console.log(Math.floor(12.96))

