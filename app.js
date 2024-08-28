function addTax(number){
    let tax = 0.2;
    return number.map((a) => a * (tax + 1))
}
let prices = [100, 6, 2, 98, 329, 32]

console.log(addTax(prices));