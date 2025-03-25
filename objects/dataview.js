// TheDataView is an object in JavaScript that allows you to work with the binary data stored in theArrayBuffer. 
// It provides a low-level interface for reading and writing number types in a binary ArrayBuffer.

// Create a larger ArrayBuffer (8 bytes)
const buffer = new ArrayBuffer(8);

// Create a DataView for a subset (bytes 2-5)
const view = new DataView(buffer, 2, 4); // Start at byte 2, length 4 bytes

// Write data within the view
view.setUint32(0, 0x12345678); // Write 32-bit unsigned int (4 bytes) starting at offset 0 of the view

// Read data
console.log("Uint32 at offset 0:", view.getUint32(0).toString(16)); // "12345678"

// Check original buffer (hex representation)
const fullView = new DataView(buffer);
console.log("Full buffer bytes:");
for (let i = 0; i < buffer.byteLength; i++) {
    console.log(`Byte ${i}: ${fullView.getUint8(i).toString(16)}`);
}
/* Output might be (big-endian):
Byte 0: 0
Byte 1: 0
Byte 2: 12
Byte 3: 34
Byte 4: 56
Byte 5: 78
Byte 6: 0
Byte 7: 0
*/