let num = 20;
let rem = " ";
let inv = " ";

while(num > 0){
rem = rem + num % 2;
num = Math.floor(num / 2);
}
let index = rem.length - 1;
while (index >= 0) {
    inv += rem[index];
    index--;
}
console.log(inv);