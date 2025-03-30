function updateLength() {
    document.getElementById('lengthValue').innerText = document.getElementById('length').value;
}

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";
    
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        document.getElementById('password').innerText = "select at least one option";
        return;
    }
    
    let typesCount = includeUppercase + includeLowercase + includeNumbers + includeSymbols;
    
    if (length < typesCount) {
        document.getElementById('password').innerText = "Password length is too short";
        return;
    }
    
    let password = [];
    
    if (includeUppercase) {
        password.push(uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)));
    }
    
    if (includeLowercase) {
        password.push(lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)));
    }
    
    if (includeNumbers) {
        password.push(numberChars.charAt(Math.floor(Math.random() * numberChars.length)));
    }
    
    if (includeSymbols) {
        password.push(symbolChars.charAt(Math.floor(Math.random() * symbolChars.length)));
    }
    let allChars = "";
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password.push(allChars.charAt(randomIndex));
    }
    
    password = shuffleArray(password);
    
    document.getElementById('password').innerText = password.join('');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}