import input from './input.js'

//1.feladat Divisors
let input1 = await input('Kérem a számot: ');

function divisors(number) {
    let divisorArray = [];
    for (let i = 0; i < number; i++) {
        if (number % i == 0){
            divisorArray.push(i);
        }
    }
    return divisorArray;
}
console.log(divisors(input1));

//2.feladat Average of the digits
let input2 = await input('Kérem a számot: ');

function digitsAverage(number) {
    const digits = String(number).split('');
    
    const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
    
    const average = sum / digits.length;
    
    return average;
}
console.log(digitsAverage(input2));

//3.feladat
let input3 = await input('Kérem a számot: ');

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'fizzbuzz';
    } else if (number % 3 === 0) {
        return 'fizz';
    } else if (number % 5 === 0) {
        return 'buzz';
    } else {
        return number;
    }
}

console.log(fizzbuzz(input3));

//4.feladat
let input4 = await input('Kérem a (min) pontot: ');
let input5 = await input('Kérem a (max) pontot: ');

function gradeCalculator(score, maximum) {
    let gradePercent = (score/maximum)*100;
    let americanGrade = "";
    if (0 <= gradePercent < 50){
        americanGrade = "F";
    }
    else if (50 < gradePercent <= 60){
        americanGrade = "E";
    }
    else if (60 < gradePercent <= 70){
        americanGrade = "D";
    }
    else if (70 < gradePercent <= 80){
        americanGrade = "C";
    }
    else if (80 < gradePercent <= 90){
        americanGrade = "B";
    }
    else if (90 < gradePercent <= 100){
        americanGrade = "A";
    }
    return americanGrade;
}

console.log(gradeCalculator(input4, input5));