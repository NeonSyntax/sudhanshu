import cryptography.fernet

# Generate a random encryption key
key = cryptography.fernet.Fernet.generate_key()

# Create a Fernet object with the encryption key
cipher_suite = cryptography.fernet.Fernet(key)

# Get message input from user
message = input("Enter your message: ")

# Encode the message as bytes
message_bytes = message.encode()

# Encrypt the message
cipher_text = cipher_suite.encrypt(message_bytes)

# Print the encrypted message
print("Encrypted message: ", cipher_text)

# Decrypt the message
plain_text_bytes = cipher_suite.decrypt(cipher_text)

# Convert the decrypted bytes back to string
plain_text = plain_text_bytes.decode()

# Print the decrypted message
print("Decrypted message: ", plain_text()