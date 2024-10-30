//Завдання 1
let width = 8;

for (let i = 0; i < width; i++) {
    let stars = '*'.repeat(width + i);
    console.log(stars);
}

for (let i = width - 2; i >= 0; i--) {
    let stars = '*'.repeat(width + i);
    console.log(stars);
}

//Завдання 2
let start = new Date().getTime();
let end = start + 10000;

while (new Date().getTime() < end) {
}

console.log("10 секунд минуло!");
