const fs = require('fs');

// Create a file named "welcome.txt" containing the text "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});

// Read the contents of the file "welcome.txt" and console log the data
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data from welcome.txt:', data);
});
