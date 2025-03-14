/**
 * Demonstrates all JavaScript assignment operators
 * @param {number} initialValue - The starting value
 * @returns {object} - Object containing results of all assignment operations
 */
function demonstrateAssignmentOperators(initialValue = 10) {
    console.log(`Starting with initial value: ${initialValue}`);
    
    // Object to store results of all operations
    const results = {
      initialValue,
      operations: []
    };
    
    // Simple assignment (=)
    let value = initialValue;
    results.operations.push({
      operator: '=',
      description: 'Simple assignment',
      example: 'value = initialValue',
      result: value
    });
    
    // Addition assignment (+=)
    value = initialValue;
    value += 5;
    results.operations.push({
      operator: '+=',
      description: 'Addition assignment',
      example: 'value += 5',
      equivalent: 'value = value + 5',
      result: value
    });
    
    // Subtraction assignment (-=)
    value = initialValue;
    value -= 3;
    results.operations.push({
      operator: '-=',
      description: 'Subtraction assignment',
      example: 'value -= 3',
      equivalent: 'value = value - 3',
      result: value
    });
    
    // Multiplication assignment (*=)
    value = initialValue;
    value *= 2;
    results.operations.push({
      operator: '*=',
      description: 'Multiplication assignment',
      example: 'value *= 2',
      equivalent: 'value = value * 2',
      result: value
    });
    
    // Division assignment (/=)
    value = initialValue;
    value /= 4;
    results.operations.push({
      operator: '/=',
      description: 'Division assignment',
      example: 'value /= 4',
      equivalent: 'value = value / 4',
      result: value
    });
    
    // Remainder assignment (%=)
    value = initialValue;
    value %= 3;
    results.operations.push({
      operator: '%=',
      description: 'Remainder/modulo assignment',
      example: 'value %= 3',
      equivalent: 'value = value % 3',
      result: value
    });
    
    // Exponentiation assignment (**=)
    value = initialValue;
    value **= 2;
    results.operations.push({
      operator: '**=',
      description: 'Exponentiation assignment',
      example: 'value **= 2',
      equivalent: 'value = value ** 2',
      result: value
    });
    
    // Bitwise AND assignment (&=)
    value = initialValue;
    value &= 6;
    results.operations.push({
      operator: '&=',
      description: 'Bitwise AND assignment',
      example: 'value &= 6',
      equivalent: 'value = value & 6',
      result: value,
      binaryExplanation: `${initialValue.toString(2)} & ${6..toString(2)} = ${value.toString(2)}`
    });
    
    // Bitwise OR assignment (|=)
    value = initialValue;
    value |= 5;
    results.operations.push({
      operator: '|=',
      description: 'Bitwise OR assignment',
      example: 'value |= 5',
      equivalent: 'value = value | 5',
      result: value,
      binaryExplanation: `${initialValue.toString(2)} | ${5..toString(2)} = ${value.toString(2)}`
    });
    
    // Bitwise XOR assignment (^=)
    value = initialValue;
    value ^= 3;
    results.operations.push({
      operator: '^=',
      description: 'Bitwise XOR assignment',
      example: 'value ^= 3',
      equivalent: 'value = value ^ 3',
      result: value,
      binaryExplanation: `${initialValue.toString(2)} ^ ${3..toString(2)} = ${value.toString(2)}`
    });
    
    // Bitwise left shift assignment (<<=)
    value = initialValue;
    value <<= 1;
    results.operations.push({
      operator: '<<=',
      description: 'Left shift assignment',
      example: 'value <<= 1',
      equivalent: 'value = value << 1',
      result: value,
      binaryExplanation: `${initialValue.toString(2)} << 1 = ${value.toString(2)}`
    });
    
    // Bitwise right shift assignment (>>=)
    value = initialValue;
    value >>= 1;
    results.operations.push({
      operator: '>>=',
      description: 'Right shift assignment',
      example: 'value >>= 1',
      equivalent: 'value = value >> 1',
      result: value,
      binaryExplanation: `${initialValue.toString(2)} >> 1 = ${value.toString(2)}`
    });
    
    // Bitwise unsigned right shift assignment (>>>=)
    value = initialValue;
    value >>>= 1;
    results.operations.push({
      operator: '>>>=',
      description: 'Unsigned right shift assignment',
      example: 'value >>>= 1',
      equivalent: 'value = value >>> 1',
      result: value,
      binaryExplanation: `${initialValue.toString(2)} >>> 1 = ${value.toString(2)}`
    });
    
    // Nullish coalescing assignment (??=)
    value = null;
    value ??= initialValue;
    results.operations.push({
      operator: '??=',
      description: 'Nullish coalescing assignment',
      example: 'value ??= initialValue',
      equivalent: 'value = value ?? initialValue',
      context: 'Starting with value = null',
      result: value
    });
    
    // Logical AND assignment (&&=)
    value = initialValue;
    value &&= 20;
    results.operations.push({
      operator: '&&=',
      description: 'Logical AND assignment',
      example: 'value &&= 20',
      equivalent: 'value = value && 20',
      result: value
    });
    
    // Logical OR assignment (||=)
    value = 0;
    value ||= initialValue;
    results.operations.push({
      operator: '||=',
      description: 'Logical OR assignment',
      example: 'value ||= initialValue',
      equivalent: 'value = value || initialValue',
      context: 'Starting with value = 0',
      result: value
    });
    
    return results;
  }
  
  // Example usage
  const results = demonstrateAssignmentOperators(10);
  console.log(JSON.stringify(results, null, 2));
  
  // To print a more readable summary
  function printResults(results) {
    console.log(`\nAssignment Operators Demo (Initial value: ${results.initialValue}):\n`);
    
    results.operations.forEach(op => {
      console.log(`${op.operator} - ${op.description}`);
      console.log(`  Example: ${op.example}`);
      if (op.equivalent) console.log(`  Equivalent to: ${op.equivalent}`);
      if (op.context) console.log(`  Context: ${op.context}`);
      console.log(`  Result: ${op.result}`);
      if (op.binaryExplanation) console.log(`  Binary: ${op.binaryExplanation}`);
      console.log();
    });
  }
  
  printResults(results);