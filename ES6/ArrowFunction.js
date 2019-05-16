var sum1 = function (a, b) {
    return a + b;
}

let sum2 = (a, b) => a + b;

var s1= sum1(5, 10);
var s2 = sum2(10, 15);
console.log(s1);
console.log(s2);

function totalFn(name ='Lithi',...invoices) {

    let total = 0;
    let inFn = (eachInvoice) => total += eachInvoice;
    invoices.forEach(inFn);
    console.log(invoices);
    return name + total;
}

var t1 = totalFn('Suganya', 3, 4, 5, 6, 7);
var t2 = totalFn(undefined, 3, 4, 5, 6, 7);
var t3 = totalFn(undefined, undefined);
var t4 = totalFn(undefined);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);



