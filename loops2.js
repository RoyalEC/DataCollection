// Example CSV string
const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Determine the number of columns from the first row
let firstNewLineIndex = csvString.indexOf("\n");
let firstRow = csvString.substring(0, firstNewLineIndex);
let columnCount = firstRow.split(",").length;

// Initialize variables for parsing
let currentCell = "";
let currentRow = [];
const allRows = [];
let columnIndex = 0;

// Parse the CSV string
for (let i = 0; i < csvString.length; i++) {
  const currentChar = csvString[i];
  const isComma = currentChar === ",";
  const isNewLine = currentChar === "\n";

  if (isComma || isNewLine) {
    currentRow.push(currentCell);
    currentCell = "";
    columnIndex++;

    if (columnIndex === columnCount || isNewLine) {
      allRows.push(currentRow);
      currentRow = [];
      columnIndex = 0;
    }

    if (isNewLine && i === firstNewLineIndex) {
      // Skip the first row (headers) in subsequent processing
      firstNewLineIndex = -1;
    }
  } else {
    currentCell += currentChar;
  }
}

// Handle the last row if it doesn't end with a newline
if (currentRow.length > 0 || currentCell) {
  if (currentCell) {
    currentRow.push(currentCell);
  }
  allRows.push(currentRow);
}

// Log the two-dimensional array
console.log(allRows);

console.log("============ Part 3 ===========");

// Assuming allRows contains the two-dimensional array from the previous code
const allRows2 = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

// Extract the headers and convert them to lowercase
const headers = allRows2[0].map((header) => header.toLowerCase());

// Initialize an array to store the objects
const objectsArray = [];

// Iterate over each row, starting from the second row
for (let i = 1; i < allRows2.length; i++) {
  const row = allRows2[i];
  let rowObject = {};

  // Map each cell in the row to a key in the object
  for (let j = 0; j < headers.length; j++) {
    rowObject[headers[j]] = row[j];
  }

  // Add the object to the array
  objectsArray.push(rowObject);
}

// Log the array of objects
console.log(objectsArray);

console.log("============ Part ===========");

// Assuming objectsArray contains the array of objects from the previous part
let objectsArray2 = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
];

// Remove the last element
objectsArray2.pop();

// Insert an object at index 1
objectsArray2.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// Add an object to the end of the array
objectsArray2.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// Log the modified array
console.log(objectsArray2);

// Calculate the average age
let totalAge = 0;
for (let i = 0; i < objectsArray2.length; i++) {
  totalAge += parseInt(objectsArray2[i].age, 10);
}
let averageAge = totalAge / objectsArray2.length;

// Log the average age
console.log("Average Age:", averageAge);

console.log("========== Part =========");

// Assuming objectsArray is the final set of data
const objectsArray3 = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Extract headers
const headers2 = Object.keys(objectsArray[0]);

// Convert headers array to a CSV string
let csvString2 = headers2.join(",") + "\n";

// Convert each object in the array to a CSV row string
for (let i = 0; i < objectsArray3.length; i++) {
  const row = objectsArray3[i];
  const rowArray = headers2.map((header) => row[header]);
  csvString2 += rowArray.join(",") + "\n";
}

// Log the final CSV string
console.log(csvString2);
