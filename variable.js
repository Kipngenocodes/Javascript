// Function to demonstrate variable declarations
function showVariableDeclarations() {
    // Using var (older way, function-scoped)
    var oldSchool = "I'm declared with var";
    console.log("var example: " + oldSchool);

    // Using let (block-scoped, can be reassigned)
    let modernVariable = "I'm declared with let";
    console.log("let example: " + modernVariable);
    
    // Using const (block-scoped, cannot be reassigned)
    const constantValue = "I'm declared with const";
    console.log("const example: " + constantValue);

    // Showing scope differences
    if (true) {
        var varScope = "I'm visible outside the block";
        let letScope = "I'm only visible in this block";
        const constScope = "I'm also only in this block";
        
        console.log("Inside block - var: " + varScope);
        console.log("Inside block - let: " + letScope);
        console.log("Inside block - const: " + constScope);
    }

    console.log("Outside block - var: " + varScope);  // Works
    // console.log(letScope);  // Would cause error
    // console.log(constScope);  // Would cause error

    // Showing reassignment
    let canChange = "Original value";
    canChange = "New value";
    console.log("let reassigned: " + canChange);

    // const cantChange = "Original"; 
    // cantChange = "New";  // Would cause error
}

// Run the function
showVariableDeclarations();