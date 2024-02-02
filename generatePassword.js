/**
 * Generate a random password based on the specified criteria.
 *
 * @param {number} length - The length of the password
 * @param {boolean} hasLower - Whether to include lowercase characters in the password
 * @param {boolean} hasUpper - Whether to include uppercase characters in the password
 * @param {boolean} hasNumber - Whether to include numeric characters in the password
 * @param {boolean} hasSymbol - Whether to include special symbol characters in the password
 * @return {string} The generated password
 */
export const generatePassword = (length = 12, hasLower = true, hasUpper = true, hasNumber = true, hasSymbol = true) => {
    let allChars = '';
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-={}[]|:;,<>.?';

    if (hasLower) {
        allChars += lowercaseChars;
    }
    if (hasUpper) {
        allChars += uppercaseChars;
    }
    if (hasNumber) {
        allChars += numberChars;
    }
    if (hasSymbol) {
        allChars += symbolChars;
    }

    if (allChars.length === 0) {
        console.error('Invalid password criteria. Please include at least one character type.');
        return null;
    }

    let password = '';

    // Ensure at least one character from each selected character set
    password += hasLower ? getRandomChar(lowercaseChars) : '';
    password += hasUpper ? getRandomChar(uppercaseChars) : '';
    password += hasNumber ? getRandomChar(numberChars) : '';
    password += hasSymbol ? getRandomChar(symbolChars) : '';

    // Fill the rest of the password with random characters
    for (let i = password.length; i < length; i++) {
        password += getRandomChar(allChars);
    }

    // Shuffle the password characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    console.log(password);
    return password;
};

const getRandomChar = (charSet) => {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
};

