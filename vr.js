function test() {
    if (1) {
       let m = 70;
       // let m = 80; // redeclaration with let keyword is not possible
       var n = 80;
       var n = 90; // redeclaration with var keyword is possible
       console.log("m = " + m + ", n = " + n);
    }
}
test();