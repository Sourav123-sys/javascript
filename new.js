
// singara = 7tk,comucha = 10tk,jilapi = 15 tk........
//  ei 3 tar totall bill krben....quantity sudu positve number hbe,,,positive num bade onno kisu hole  error show koraben.....


// input number na hole,,number dte blben,,
//input negative number hole positive number dte blben,,
//input jodi 0,0,0, hoi thle minimum ektar man 0 theke boro dte blben
//r ei sb gula return kore dekaben,,console na........


//anaTovori.....
// input number na hole,,number dte blben,,
//input negative number hole positive number dte blben,,
//r e sb gula return kore dekaben,,console na........


// input kon doroner seta chck krben typeof method dye..

function sum(singara,somucha,jilapi) {
    if (singara === 0 && somucha === 0 && jilapi === 0) {
        console.log("please add at least one valid number");
        return;
    }
    let singaraCost=singara*7;
    let somuchaCost=somucha*10;
    let jilapiCost=jilapi*15;
    let totalCost = '';

    if ( singara > 0 && typeof singara === "number"){
        totalCost += singaraCost;
    }else if (typeof singara !== "number") {
        console.log("Please give a valid number")
    }else{
        console.log("please give a positive number")
    }
    if (somucha > 0 && typeof somucha === "number") {
        totalCost += somuchaCost;
    }else if (typeof somucha !== "number") {
        console.log("Please give a valid number")
    }else{
        console.log("please give a positive number")
    }

    if (jilapi > 0 && typeof jilapi === "number") {
        totalCost += jilapiCost;
    }else if (typeof jilapi !== "number") {
        console.log("Please give a valid number")
    }else{
        console.log("please give a positive number")
    }

    console.log(totalCost);
}
   sum(1,0,"5")


