for (let i =1; i <= 10; i++) {
    console.log(i);
}
// keyword condition code

for( let i =10; i >=1; i--) {
        console.log(i);
    }
let z = 1;
    while (z<=10) {
  console.log(z);
  z++;
    }

do {
    console.log (z);
    z++;
} while ( z<= 10);

const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
const foods = ["ice cream", "cake", "pizza"];

for ( let number of numbers) {
    console.log(number);
}
for ( let food of foods) {
    console.log(food);
}

//foods.forEach((food) => console.log(food));