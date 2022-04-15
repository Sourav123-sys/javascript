let productList = [

{name:"redmi",price:12000},

{name:"apple-watch",price:15000},

{name:"redmi-watch",price:1000},
{name:"iphone",price:120000},


];

function searchProduct(products,searchText) {
    let result = [];
    for(product of products) {
        if(product.name.includes(searchText)){
          //  console.log(product);
          result.push(product)

        }
       
    }
    return result;
}
let answer = searchProduct(productList,"iphone")
console.log(answer);
console.log("123" + 123);