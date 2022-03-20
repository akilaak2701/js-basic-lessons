const maxvalue = Math.max(10,12, 35, 60, 2, 55);
console.log(maxvalue);

const floatValue = parseFloat('2.032365');
console.log(floatValue);

let intValue = parseInt('2356abcd');
console.log(intValue);

intValue = parseInt('abcd2356');
console.log(intValue);

let today = Date.now();
console.log(today);
// ------------
function calculateBill(billAmount, taxRate) {
    console.log(billAmount + '-' + taxRate);
};
calculateBill(100, 0.13);
let billtotal = calculateBill( 20+10+50, 0.75);
console.log(billtotal);
// ---------------
//default value for the parameter
function yell (name = 'silly Goose') {
    return `HEY ${name.toUpperCase()}`
};
let greetings = yell('akila');//hey akila
console.log(greetings);
greetings = yell(); //HEY SILLY GOOSE
console.log(greetings);
// ----------------------
function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
    console.log('Running Calculate Bill!!');
    console.log('billAmount:' + billAmount + 'taxRate:' + taxRate +'tipRate:' + tipRate);
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}
//calculateBill(100)
//calculateBill(100, 0.66)
// suppose above, we want to pass the tiprate but not the taxrate and 
//want the taxrate to be default