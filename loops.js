// While Loops

/*let x = 10;
while (x > 0) {
  x--;
  console.log(x);
}

let z = 0;
while (z < 35) {
  z++;
  if (z % 3 !== 0) {
    continue;
  }
  console.log(z, "is a multiple of 3");
}

console.log("========= Part 1: Fizz Buzz ===========");

let a = 0;
while (a < 100) {
  a++;
  console.log("Counter:", a);
}
let b = 0;
while (b < 100) {
  b++;
  if (b % 3 == 0) {
    console.log(b, "is divisible by 3", "Fizz");
  }
}

let c = 0;
while (c < 100) {
  c++;
  if (c % 5 == 0) {
    console.log(c, "is divisible by 5", "Buzz");
  }
}

let d = 0;
while (d < 100) {
  d++;
  if (d % 3 == 0 && d % 5 == 0) {
    console.log(d, "is divisible by 3 & 5", "FizzBuzz");
  }
}

let e = 0;
while (e < 100) {
  e++;
  if (e % 3 == 0 || e % 5 == 0) {
    continue;
  }
  console.log(e, "is not divisible by 3 or 5");
}

let t = 0;
while (t < 100) {
  if (t % 3 == 0 && t % 5 == 0) {
    console.log(t, "is divisible by 3 & 5", "FizzBuzz");
  }
  if (t % 3 == 0 || t % 5 == 0) {
    continue;
  }
  console.log(t, "is not divisible by 3 or 5");

  if (t % 5 == 0) {
    console.log(t, "is divisible by 5", "Buzz");
  }
  if (t % 3 == 0) {
    console.log(t, "is divisible by 3", "Fizz");
  }
}

console.log("========== Part 2: Prime Time ============");

function isItPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isItPrime(5));*/

// Example CSV string
const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cellNumber = 1;

for (let i = 0; i < csvString.length; i++) {
  const currentChar = csvString[i];
  const isComma = currentChar === ",";
  const isNewLine = currentChar === "\n";

  // Check for a comma or a newline character to determine cell boundaries
  if (isComma || isNewLine) {
    cellNumber++;

    if (cellNumber > 4) {
      // Reset for next row
      console.log(cell1, cell2, cell3, cell4); // Log the entire row
      cell1 = cell2 = cell3 = cell4 = ""; // Reset cells for the next row
      cellNumber = 1;
    }

    if (isNewLine) {
      continue; // Move to the next iteration to skip adding '\n' to a cell
    }
  } else {
    // Accumulate characters into the appropriate cell based on the current cell number
    if (cellNumber === 1) cell1 += currentChar;
    if (cellNumber === 2) cell2 += currentChar;
    if (cellNumber === 3) cell3 += currentChar;
    if (cellNumber === 4) cell4 += currentChar;
  }
}

// Log the last row if it exists
if (cell1 || cell2 || cell3 || cell4) {
  console.log(cell1, cell2, cell3, cell4);
}
