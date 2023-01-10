// Week 1 - Conditionals and Loops

// 09.06.2022

// Writing Statements

console.log("**** If Else Statement ****")

var result = 68;
if (result > 60) {
    console.log("Slowdown, you're speeding!")
} else {
    console.log("Good speed! Keep going.")
}

console.log("")
// Another example
console.log("~ Another example ~")
console.log("~ Age & Salary ~")
var age = 64;

if (age >= 65) {
    console.log("You get your income from your pension.")
} else if (age < 65 && age >=18) {
    console.log("Each month you get a salary.")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age avriable is not numerical.")
}

console.log("")
// Working with conditional statements

console.log("**** Switch Statement ****")
var place = 'second';

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}

console.log("")
// Looping construct

console.log("**** The FOR loop ****")
for (var i = 0; i < 5; i++) {
    console.log(i)
}

console.log("")
// Example #1

console.log("Example #1")
for (var a = 1; a <= 3; a++) {
    console.log(a)
}
console.log("Go!")

console.log("")
// Example #2

console.log("Example #2")
for (var b = 10; b > 0; b--) {
    console.log(b)
}
console.log("Happy New Year!!")

console.log("")
// Example #3

console.log("Example #3")
for (var i = 1; i < 6; i++) {
    console.log(i);
}
console.log("Counting completed!")

console.log("")
// Example #4

console.log("Example #4")
for (var i = 5; i > 0; i--) {
    console.log(i)
}
console.log("Countdown finished!")

console.log("")
// While Loops

console.log("**** WHILE Loop ****")
var counter = 3;

while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Ruun!")

console.log("")
// Example #1

console.log("Example #1")

var counter = 1;

while (counter < 6) {
    console.log(counter);
    counter = counter + 1;

}
console.log("Counting completed!")

console.log("")
// Example #2

console.log("Example #2")

var counter = 5;

while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Countdown finished!")

console.log("")
// Example #3

console.log("Example #3")

var counter = 2014;

while (counter <= 2023) {
    console.log(counter);
    counter++;
}

console.log("")
// Nested Loops

console.log("**** Nested Loops ****")
for (year = 2020; year < 2024 ; year++) {
    console.log(year);
    for (month = 6; month < 9; month++) {
        console.log("-----", month)
    }        
}

console.log("")
// Example #1

console.log("Example #1")
for (var week = 1; week <= 4 ; week++) {
    for (day = 1; day <= 5; day++) {
        console.log("Week " + week + " day " + day)
    }        
}

console.log("")
// Example #2

console.log("Example #2")
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

console.log("")
// Example #3

console.log("Example #3")
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

console.log("")
// Example #4

console.log("Example #4")
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

console.log("")
// Example #5
console.log("Example #5")

var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

console.log("")
// Exercise
console.log("Exercise: Working with conditionals and loops")
console.log("FOR Loop + if else:")

for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        console.log(i)
    }
}

console.log("")
// Exercise
console.log("Exercise: Working with conditionals and loops")
console.log("FOR Loop + Switch:")

for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            console.log(i)
    }
}
