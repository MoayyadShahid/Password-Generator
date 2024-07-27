document.getElementById('generateButton').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = createPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('passwordDisplay').value = password;
    updateStrengthIndicator(password);
}

function createPassword(length, upper, lower, numbers, symbols) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let validChars = '';
    if (upper) validChars += uppercaseLetters;
    if (lower) validChars += lowercaseLetters;
    if (numbers) validChars += numberChars;
    if (symbols) validChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += validChars[Math.floor(Math.random() * validChars.length)];
    }
    return password;
}

function updateStrengthIndicator(password) {
    const strengthValue = document.getElementById('strengthValue');
    if (password.length < 6) {
        strengthValue.textContent = 'Weak';
    } else if (password.length <= 10) {
        strengthValue.textContent = 'Medium';
    } else {
        strengthValue.textContent = 'Strong';
    }
}

document.getElementById('copyButton').addEventListener('click', function() {
    const password = document.getElementById('passwordDisplay');
    password.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
