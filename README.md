
```md
# Vigenère Cipher and Enhanced Vigenère Cipher Encryption and Decryption  

## 1. Overview  
This project implements the **Vigenère Cipher** and **Enhanced Vigenère Cipher** for encryption and decryption. The Enhanced Vigenère Cipher improves upon the classical version by introducing positional shifts, making it more secure against frequency analysis attacks. The project provides a **web-based interface** built using **HTML, CSS, and JavaScript**, allowing users to encrypt and decrypt messages using both methods.  

---

## 2. Features  
✅ Encrypt and decrypt text using the **Vigenère Cipher** and **Enhanced Vigenère Cipher**.  
✅ User-friendly web interface for inputting text and keys.  
✅ Real-time encryption and decryption output.  
✅ Secure and efficient implementation using JavaScript.  

---

## 3. Technologies Used  
- **Frontend**: HTML, CSS, JavaScript  
- **Development Tools**: Visual Studio Code, GitHub  
- **Testing Environment**: Browser Console  

---

## 4. Installation & Usage  

### 4.1 Running the Project Locally  
1. Clone this repository:  
   ```sh
   git clone https://github.com/fahadhasan93/Vigenere-Cipher-and-Enhanced-Vigenere-Cipher.git
   cd Vigenere-Cipher-and-Enhanced-Vigenere-Cipher
   ```
2. Open `index.html` in a browser.  
3. Enter plaintext and keyword, then select encryption or decryption.  

---

## 5. Encryption & Decryption Process  

### 5.1 Vigenère Cipher  

#### 🔹 Encryption Formula  
\[
C[i] = (P[i] + K[i]) \mod 26
\]  

#### 🔹 Decryption Formula  
\[
P[i] = (C[i] - K[i] + 26) \mod 26
\]  

**Example:**  
- **Plaintext**: `"HELLO"`  
- **Keyword**: `"KEY"`  
- **Ciphertext**: `"RIJVS"`  

---

### 5.2 Enhanced Vigenère Cipher  

#### 🔹 Encryption Formula  
\[
S[i] = (P[i] + K[i] + i) \mod 26
\]  

#### 🔹 Decryption Formula  
\[
P[i] = (S[i] - K[i] - i + 26) \mod 26
\]  

**Example:**  
- **Plaintext**: `"HELLO"`  
- **Keyword**: `"KEY"`  
- **Ciphertext**: `"RIKWT"`  

---

## 6. Limitations  
❌ Supports only uppercase English letters (A-Z).  
❌ Requires manual keyword input.  
❌ Slight performance overhead in the Enhanced Vigenère Cipher due to additional computations.  

---

## 7. Future Improvements  
🔹 Add support for numbers and special characters.  
🔹 Implement an automated key generation system.  
🔹 Optimize performance for larger text inputs.  
🔹 Develop a **Graphical User Interface (GUI)** for better user experience.  

---

## 8. License  
This project is licensed under the **MIT License**.  

---

## 9. Contact  
📧 Email: [mdfahadhasan627@gmail.com](mailto:mdfahadhasan627@gmail.com)  
🔗 GitHub: [https://github.com/fahadhasan93/Vigenere-Cipher-and-Enhanced-Vigenere-Cipher](https://github.com/fahadhasan93/Vigenere-Cipher-and-Enhanced-Vigenere-Cipher)  
```

