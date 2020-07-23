// Looping a Triangle

// using a for loop
let string = '';

for (let i = 0; string.length < 7; i++) {
    string += '#';
    console.log(string);
}

// using a while loop
string = '';

while (string.length < 7) {
    string += '#';
    console.log(string);
}

// using a do while loop
string = '';

do {
    string += '#';
    console.log(string);
} while (string.length < 7)


// FizzBuzz

// using a for loop
for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);    
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }

}

// Chessboard - not working
string = ' ';

for (let i = 0; i < 8; i++) {
    for (let j = 0; string.length < 8; j++) {
        string += '#';
        if (string.length < 8) {
            string += ' ';
        } else {
            string += '\n';
        }
    }
    console.log(string);
}
