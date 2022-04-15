
/*
chair = 3ft
table = 10ft
bed = 50ft
*/
//wood counter
function woodCalculator(chair,table,bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairQuantity = chair*perChairWood;
    const TableQuantity = table*perTableWood;
    const bedQuantity = bed*perBedWood;

    const totalWood =  chairQuantity + TableQuantity +bedQuantity
    return totalWood;

}
let count = woodCalculator(1,1,1)
//console.log(count)

//find lowest price of phone from an object


const phones =  [

    {
        name:'samsung',
        price:15000
    },
    {
        name:'walton',
        price:16000
    },
    {
        name:'redmi',
        price:12000
    },
    {
        name:'oppo',
        price:18000
    },

]

let phone =  phones[0];

for(let i = 0; i <phones.length; i++){
    element = phones[i];
    if(element.price<phone.price){
        phone = element;
    }
}
//console.log(phone)

// total cart


let items = [
    
    {
        name :'shirt',
        quantity :8,
        price : 1200
    },

    {
        name :'T-shirt',
        quantity :5,
        price : 1000
    },
    {
        name :'mobile',
        quantity :4,
        price : 12000
    },

]
let cartTotal = 0;
for(let item of items){
   // console.log(item)

    productTotal = item.price+item.quantity
    cartTotal = cartTotal + productTotal
}
//console.log(cartTotal)



//animal count in a jungle

//16 ana = 1vori