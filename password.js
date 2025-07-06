// Random password generator

function generatePassword(length,includeLowercase,includeUppercase, includeNumbers, includeSymbols){
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let characters = '';
    let password = '';

    characters += includeLowercase ? lowercase : '';
    characters += includeUppercase ? uppercase : '';
    characters += includeNumbers ? numbers : '';
    characters += includeSymbols ? symbols : '';

    if (characters.length === 0) {
        return `(password length  must be at least 1)`
    }
    if (characters.length === 0){
        `Please select at least one character type: lowercase, uppercase, numbers, or symbols.`;
    }
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
 
    return password;
}


const passwordLength = 12; // Default password length
const includeLowercase = true; // Include lowercase letters
const includeUppercase = true; // Include uppercase letters
const includeNumbers = true; // Include numbers
const includeSymbols = true; // Include symbols


const password = generatePassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols);

    console.log(`generated password: ${password}`);