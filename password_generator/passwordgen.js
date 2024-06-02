// Import the generate-password module
const generatePassword = require('generate-password');

// Create a function to generate random passwords
function generateRandomPassword() {
  // Define options for generating the password
  const options = {
    length: 10, // Length of the password
    numbers: true, // Include numbers in the password
    symbols: true, // Include symbols in the password
    uppercase: true, // Include uppercase letters in the password
    excludeSimilarCharacters: true, // Exclude similar characters (e.g., 1 and l)
  };

  // Generate the password using the options
  const password = generatePassword.generate(options);

  // Return the generated password
  return password;
}

// Generate a random password and log it to the console
const password = generateRandomPassword();
console.log('Generated Password:', password);
