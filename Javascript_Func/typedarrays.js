// A JavaScript TypedArray is an array-like object used to store binary data. Unlike the array, 
// the size of the TypedArray can't be dynamic and can't hold the values of the different data types, 
// but it can be used for improving the performance of the TypedArray.

// A TypedArray is used in audio processing, graphics rendering, networking,

/**
 * JavaScript TypedArray Demonstration
 * 
 * TypedArrays are array-like objects that provide a mechanism for reading and writing
 * raw binary data in memory buffers. They were introduced to improve performance for
 * operations involving binary data and to provide better interoperability with native
 * libraries.
 */

// PART 1: Creating TypedArrays
console.log("=== PART 1: Creating TypedArrays ===");

// Method 1: Create a TypedArray by specifying length
const uint8Array1 = new Uint8Array(4);
console.log("Uint8Array created with length 4:", uint8Array1);

// Method 2: Create a TypedArray from an ArrayBuffer
const buffer = new ArrayBuffer(16); // Create a 16-byte buffer
const int32Array = new Int32Array(buffer);
console.log("Int32Array created from 16-byte ArrayBuffer:", int32Array);
console.log("Length of Int32Array:", int32Array.length); // Should be 4 (16 bytes / 4 bytes per Int32)

// Method 3: Create a TypedArray from an array-like or iterable object
const float64Array = new Float64Array([1.1, 2.2, 3.3, 4.4]);
console.log("Float64Array created from array:", float64Array);

// Method 4: Create a TypedArray view on part of an existing buffer
const fullBuffer = new ArrayBuffer(8);
const firstHalf = new Uint16Array(fullBuffer, 0, 2); // Start at byte 0, length 2
const secondHalf = new Uint16Array(fullBuffer, 4, 2); // Start at byte 4, length 2
console.log("Two Uint16Array views on the same buffer:", { firstHalf, secondHalf });

// PART 2: Available TypedArray Types
console.log("\n=== PART 2: Available TypedArray Types ===");

const typedArrayTypes = [
  { name: "Int8Array", example: new Int8Array([127, -128]), bytes: 1, description: "8-bit signed integer" },
  { name: "Uint8Array", example: new Uint8Array([255, 0]), bytes: 1, description: "8-bit unsigned integer" },
  { name: "Uint8ClampedArray", example: new Uint8ClampedArray([300, -10]), bytes: 1, description: "8-bit unsigned integer (clamped)" },
  { name: "Int16Array", example: new Int16Array([32767, -32768]), bytes: 2, description: "16-bit signed integer" },
  { name: "Uint16Array", example: new Uint16Array([65535, 0]), bytes: 2, description: "16-bit unsigned integer" },
  { name: "Int32Array", example: new Int32Array([2147483647, -2147483648]), bytes: 4, description: "32-bit signed integer" },
  { name: "Uint32Array", example: new Uint32Array([4294967295, 0]), bytes: 4, description: "32-bit unsigned integer" },
  { name: "Float32Array", example: new Float32Array([3.14, -42.5]), bytes: 4, description: "32-bit floating point" },
  { name: "Float64Array", example: new Float64Array([Number.MAX_VALUE, Number.MIN_VALUE]), bytes: 8, description: "64-bit floating point" },
  { name: "BigInt64Array", example: new BigInt64Array([BigInt("9223372036854775807"), BigInt("-9223372036854775808")]), bytes: 8, description: "64-bit signed integer (BigInt)" },
  { name: "BigUint64Array", example: new BigUint64Array([BigInt("18446744073709551615"), BigInt(0)]), bytes: 8, description: "64-bit unsigned integer (BigInt)" }
];

typedArrayTypes.forEach(type => {
  console.log(`${type.name}: ${type.bytes} byte(s) per element, ${type.description}`);
  console.log(`Example: ${type.name}([${type.example}]) => Actual values: [${[...type.example]}]`);
  if (type.name === "Uint8ClampedArray") {
    console.log("Note: Uint8ClampedArray automatically clamps values to 0-255 range");
    console.log("Original values were [300, -10], but got clamped to:", [...type.example]);
  }
});

// PART 3: Common Operations
console.log("\n=== PART 3: Common Operations ===");

// Create a sample TypedArray
const int16Array = new Int16Array([1, 2, 3, 4, 5]);
console.log("Original Int16Array:", int16Array);

// Modifying elements
int16Array[0] = 10;
console.log("After modifying first element:", int16Array);

// Using array methods
const doubled = int16Array.map(x => x * 2);
console.log("After mapping (x => x * 2):", doubled);

const filtered = int16Array.filter(x => x > 3);
console.log("After filtering (x > 3):", filtered);

// Getting a subset of the array
const subarray = int16Array.subarray(1, 4);
console.log("Subarray (from index 1 to 3):", subarray);

// Setting values from another array
const destination = new Int16Array(5);
destination.set(int16Array, 0);
console.log("After setting values from another array:", destination);

// PART 4: Working with ArrayBuffer and views
console.log("\n=== PART 4: Working with ArrayBuffer and views ===");

// Create a buffer and multiple views
const sharedBuffer = new ArrayBuffer(16);
const byteView = new Uint8Array(sharedBuffer);
const int16View = new Int16Array(sharedBuffer);
const int32View = new Int32Array(sharedBuffer);

console.log("Initial views on empty buffer:");
console.log("- Uint8Array (byte view):", byteView);
console.log("- Int16Array (16-bit view):", int16View);
console.log("- Int32Array (32-bit view):", int32View);

// Modify the buffer using one view and observe the changes in others
byteView[0] = 255; // Set first byte to 255 (0xFF)
byteView[1] = 0;   // Set second byte to 0
byteView[2] = 0;   // Set third byte to 0
byteView[3] = 0;   // Set fourth byte to 0

console.log("\nAfter setting first byte to 255 (0xFF):");
console.log("- Uint8Array (byte view):", [...byteView.subarray(0, 4)]);
console.log("- Int16Array (16-bit view):", [...int16View.subarray(0, 2)]);
console.log("- Int32Array (32-bit view):", int32View[0]);

// Modify the buffer using a different view
int16View[0] = 1234; // Modify first 16-bit value

console.log("\nAfter setting first 16-bit value to 1234:");
console.log("- Uint8Array (byte view):", [...byteView.subarray(0, 4)]);
console.log("- Int16Array (16-bit view):", [...int16View.subarray(0, 2)]);
console.log("- Int32Array (32-bit view):", int32View[0]);

// PART 5: Endianness and byte order
console.log("\n=== PART 5: Endianness and byte order ===");

const value = 0x12345678;
const endianBuffer = new ArrayBuffer(4);
const dataView = new DataView(endianBuffer);

// Write as a 32-bit integer
dataView.setUint32(0, value, false); // false = big-endian

console.log("Value 0x12345678 written as big-endian:");
console.log("Byte values:", [...new Uint8Array(endianBuffer)]);
console.log("Read as big-endian:", dataView.getUint32(0, false).toString(16));
console.log("Read as little-endian:", dataView.getUint32(0, true).toString(16));

// PART 6: Performance Benefits
console.log("\n=== PART 6: Performance Benefits ===");

// Example showing performance difference between regular arrays and TypedArrays
const size = 1000000;

console.log(`Creating and summing ${size} numbers:`);

// Regular array performance
console.time("Regular Array");
const regularArray = new Array(size);
for (let i = 0; i < size; i++) {
  regularArray[i] = i;
}
let regularSum = 0;
for (let i = 0; i < size; i++) {
  regularSum += regularArray[i];
}
console.timeEnd("Regular Array");
console.log("Regular array sum:", regularSum);

// TypedArray performance
console.time("Int32Array");
const typedArray = new Int32Array(size);
for (let i = 0; i < size; i++) {
  typedArray[i] = i;
}
let typedSum = 0;
for (let i = 0; i < size; i++) {
  typedSum += typedArray[i];
}
console.timeEnd("Int32Array");
console.log("TypedArray sum:", typedSum);

// PART 7: Practical Use Cases
console.log("\n=== PART 7: Practical Use Cases ===");

// Example 1: Converting between string and binary data
function stringToArrayBuffer(str) {
  const encoder = new TextEncoder();
  return encoder.encode(str).buffer;
}

function arrayBufferToString(buffer) {
  const decoder = new TextDecoder();
  return decoder.decode(buffer);
}

const testString = "Hello, TypedArrays!";
const encodedData = stringToArrayBuffer(testString);
const decodedString = arrayBufferToString(encodedData);

console.log("Original string:", testString);
console.log("Encoded as Uint8Array:", new Uint8Array(encodedData));
console.log("Decoded back to string:", decodedString);

// Example 2: Image processing (simulated)
console.log("\nSimulated image processing:");
function createImageData(width, height) {
  // Create a simulated RGBA image (4 bytes per pixel)
  return new Uint8ClampedArray(width * height * 4);
}

const imageWidth = 3, imageHeight = 2;
const imageData = createImageData(imageWidth, imageHeight);

// Set all pixels to red
for (let i = 0; i < imageData.length; i += 4) {
  imageData[i] = 255;     // R
  imageData[i + 1] = 0;   // G
  imageData[i + 2] = 0;   // B
  imageData[i + 3] = 255; // A (fully opaque)
}

console.log("Image data (all red pixels):", imageData);

// Invert colors
for (let i = 0; i < imageData.length; i += 4) {
  imageData[i] = 255 - imageData[i];         // R
  imageData[i + 1] = 255 - imageData[i + 1]; // G
  imageData[i + 2] = 255 - imageData[i + 2]; // B
  // Keep alpha the same
}

console.log("Image data after inversion (all cyan pixels):", imageData);