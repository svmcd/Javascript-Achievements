let button = document.getElementById('button');
let result = document.getElementById('result');
const numbers = [];


button.addEventListener('click', async () => {
    for (let i = 1; i < 4; i++) randomizer(i);
    for (let i = 0; i < 4; i++) numbers.push(randomizer());;
    let min_number = Math.min.apply(Math, numbers);
    numbers.pop(min_number);
    telOp = numbers[0] + numbers[1] + numbers[2];
    result.innerHTML = telOp;
})

function randomizer(range = 6){ 
    return Math.floor((Math.random() * range)) + 1;
}