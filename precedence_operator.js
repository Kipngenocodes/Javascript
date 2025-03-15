// JavaScript Operator Precedence Guide
// Higher values = higher precedence (executed first)

// 1. Member Access (.) - precedence: 19
const obj = { property: 'value' };
console.log(obj.property); // 'value'

// 2. Computed Member Access ([]) - precedence: 19
const arr = [10, 20, 30];
console.log(arr[1]); // 20

// 3. new (with argument list) - precedence: 19
const date = new Date();

// 4. Function Call - precedence: 19
function sayHello() { return 'Hello!'; }
console.log(sayHello()); // 'Hello!'

// 5. Optional Chaining (?.) - precedence: 19
const user = { profile: { name: 'John' } };
console.log(user?.profile?.name); // 'John'

// 6. Postfix Increment/Decrement - precedence: 18
let a = 5;
console.log(a++); // 5 (returns, then increments)
console.log(a);   // 6

// 7. Logical NOT (!), Unary Plus/Minus, Prefix Increment/Decrement - precedence: 16-17
let b = 5;
console.log(!true);  // false
console.log(+'-10'); // -10 (converts string to number)
console.log(-b);     // -5
console.log(++b);    // 6 (increments, then returns)

// 8. Exponentiation (**) - precedence: 15
console.log(2 ** 3); // 8

// 9. Multiplication (*), Division (/), Remainder (%) - precedence: 14
console.log(10 * 5);   // 50
console.log(10 / 5);   // 2
console.log(10 % 3);   // 1

// 10. Addition (+), Subtraction (-) - precedence: 13
console.log(10 + 5);   // 15
console.log(10 - 5);   // 5

// 11. Bitwise Shift (<<, >>, >>>) - precedence: 12
console.log(8 << 2);   // 32 (shift left)
console.log(8 >> 2);   // 2 (shift right)

// 12. Relational Operators (<, >, <=, >=, in, instanceof) - precedence: 11
console.log(5 < 10);   // true
console.log(5 instanceof Number); // false
console.log('property' in obj);   // true

// 13. Equality (==, !=, ===, !==) - precedence: 10
console.log(5 == '5');    // true (loose equality)
console.log(5 === '5');   // false (strict equality)

// 14. Bitwise AND (&) - precedence: 9
console.log(5 & 3);  // 1 (0101 & 0011 = 0001)

// 15. Bitwise XOR (^) - precedence: 8
console.log(5 ^ 3);  // 6 (0101 ^ 0011 = 0110)

// 16. Bitwise OR (|) - precedence: 7
console.log(5 | 3);  // 7 (0101 | 0011 = 0111)

// 17. Logical AND (&&) - precedence: 6
console.log(true && false);  // false

// 18. Logical OR (||) - precedence: 5
console.log(true || false);  // true

// 19. Nullish Coalescing (??) - precedence: 5
console.log(null ?? 'default');  // 'default'

// 20. Conditional/Ternary (? :) - precedence: 4
console.log(true ? 'yes' : 'no');  // 'yes'

// 21. Assignment (=, +=, -=, etc.) - precedence: 3
let c = 10;
c += 5;  // c = c + 5
console.log(c);  // 15

// 22. Comma (,) - precedence: 1 (lowest)
let result = (1, 2, 3, 4, 5);
console.log(result);  // 5 (returns the last value)

// Complex examples demonstrating precedence
// Example 1: Arithmetic operations
console.log(2 + 3 * 4);         // 14 (not 20, multiplication happens first)
console.log((2 + 3) * 4);       // 20 (parentheses override precedence)

// Example 2: Logical operations with comparison
console.log(5 > 3 && 10 < 20);  // true (both comparisons happen before &&)
console.log(5 > 3 || 30 < 20);  // true (|| evaluated after comparisons)

// Example 3: Mixed operations
let d = 10;
console.log(d++ + ++d);         // 22 (postfix, then prefix, then addition)

// Example 4: Function call and member access
function getObject() { return { value: 42 }; }
console.log(getObject().value);  // 42 (function call, then member access)

// Example 5: Assignment in conditions
let e, f;
console.log((e = f = 5) === 5);  // true (assignment right-to-left, then comparison)