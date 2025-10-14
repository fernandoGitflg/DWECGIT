let array = [100,23,23,23,23,67,45];
let outputArray= [];

while (array.length > 0) {
    let elemento = array.pop();
    if (!outputArray.includes(elemento)) { 
        outputArray.push(elemento);
    }
}
console.log(outputArray.reverse());

let array2 = [100,23,23,23,23,67,45];
let outputArray2 = Array.from(new Set(array2));

console.log(outputArray2);

