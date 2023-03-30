function encrypt() {
    // Get the input text
    const input = document.getElementById("input").value;
  
    // Generate a random encryption key
    const key = generateKey();
  
    // Encrypt the input text using the key
    const encrypted = encryptText(input, key);
  
    // Output the encrypted result
    document.getElementById("output").textContent = `Encrypted Result: ${encrypted} (Encryption Key: ${key})`;
  }
  
  function generateKey() {
    // Generate a random 16-byte encryption key using a secure cryptographic library
    const key = crypto.getRandomValues(new Uint8Array(16));
    return Array.from(key, byte => ('0' + byte.toString(16)).slice(-2)).join('');
  }
  
  function encryptText(text, key) {
    // Convert the text to UTF-8 bytes
    const textBytes = new TextEncoder().encode(text);
  
    // Convert the key from hex string to a Uint8Array
    const keyBytes = new Uint8Array(key.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  
    // Encrypt the text using AES-CTR mode encryption with the key
    const cipher = crypto.subtle.encrypt({name: 'AES-CTR', counter: new Uint8Array(16)}, keyBytes, textBytes);
  
    // Convert the encrypted result to a hex string
    const encryptedBytes = new Uint8Array(cipher).reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
    return encryptedBytes;
  }