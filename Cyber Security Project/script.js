
const charToNum = char => char.charCodeAt(0) - 65;
const numToChar = num => String.fromCharCode((num + 26) % 26 + 65);

const extendKeyword = (text, keyword) => keyword.repeat(Math.ceil(text.length / keyword.length)).slice(0, text.length);

function classicEncrypt() {
    const plaintext = document.getElementById("classic-plaintext").value.toUpperCase();
    const keyword = extendKeyword(plaintext, document.getElementById("classic-keyword").value.toUpperCase());

    const result = plaintext.split('').map((char, i) => {
        if (/[A-Z]/.test(char)) {
            const shift = (charToNum(char) + charToNum(keyword[i])) % 26;
            return numToChar(shift);
        }
        return char;
    }).join('');
    
    document.getElementById("classic-result").innerText = `Encrypted: ${result}`;
}

function classicDecrypt() {
    const ciphertext = document.getElementById("classic-plaintext").value.toUpperCase();
    const keyword = extendKeyword(ciphertext, document.getElementById("classic-keyword").value.toUpperCase());

    const result = ciphertext.split('').map((char, i) => {
        if (/[A-Z]/.test(char)) {
            const shift = (charToNum(char) - charToNum(keyword[i]) + 26) % 26;
            return numToChar(shift);
        }
        return char;
    }).join('');
    
    document.getElementById("classic-result").innerText = `Decrypted: ${result}`;
}

function enhancedEncrypt() {
    const plaintext = document.getElementById("enhanced-plaintext").value.toUpperCase();
    const keyword = extendKeyword(plaintext, document.getElementById("enhanced-keyword").value.toUpperCase());

    const result = plaintext.split('').map((char, i) => {
        if (/[A-Z]/.test(char)) {
            const shift = (charToNum(char) + charToNum(keyword[i]) + i) % 26;
            return numToChar(shift);
        }
        return char;
    }).join('');
    
    document.getElementById("enhanced-result").innerText = `Encrypted: ${result}`;
}

function enhancedDecrypt() {
    const ciphertext = document.getElementById("enhanced-plaintext").value.toUpperCase();
    const keyword = extendKeyword(ciphertext, document.getElementById("enhanced-keyword").value.toUpperCase());

    const result = ciphertext.split('').map((char, i) => {
        if (/[A-Z]/.test(char)) {
            const shift = (charToNum(char) - charToNum(keyword[i]) - i + 26) % 26;
            return numToChar(shift);
        }
        return char;
    }).join('');
    
    document.getElementById("enhanced-result").innerText = `Decrypted: ${result}`;
}
