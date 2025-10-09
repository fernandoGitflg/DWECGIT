let array = [100,23,23,23,23,67,45];
let outputArray= [];

while (array.length > 0) {
    let elemento = array.pop();
    if (!outputArray.includes(elemento)) { 
        outputArray.push(elemento);
    }
}
console.log(outputArray.reverse());

outputArray=Array.from

