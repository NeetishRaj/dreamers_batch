//Bigint type
// To operate on bigger numbers than Number.MAX_SAFE_INTEGER we use BigInt type.
let a = 23;

let b = Number.MAX_SAFE_INTEGER;
console.log(b);  // 9007199254740991
console.log(b + 2);  //9007199254740992 which is one less than expected. It's incorrect


// How to create bigint types

let safe_b = 9007199254740991n;

console.log(safe_b); 
console.log(safe_b + 2n);


let bigint_num = BigInt(34564536345634563456);


//  Detecting the BigInt type
console.log(typeof safe_b === 'bigint');  //true



// Uses of Bigint, 
// ANy situations where the number size is bigger than  Number.MAX_SAFE_INTEGER


// SI calculation for a huge Principal

let huge_principal = 9007199254740991000n
let amount_after_interest = huge_principal + (huge_principal * 12n * 10n) / 100n;
console.log(amount_after_interest);






