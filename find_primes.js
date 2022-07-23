
//VERSION 1
// function is_prime(num) {

//     if(num === 1) return false;

//     if(num === 2) return true;

//     for (let i = 2; i < num; i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }

//     return true;

// }


// function find_all_primes(n) {

//     for (let num = 1; num <= n; num++) {

//         if(is_prime(num)) {
//             console.log(`${num} is prime.`);
//         } else {
//             console.log(`${num} is not prime.`);
//         }
//     }

// }


// find_all_primes(30);





// VERSION 2
// function is_prime(num) {

//     if(num === 1) return false;

//     if(num === 2) return true;

//     for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }

//     return true;

// }


// function find_all_primes(n) {

//     for (let num = 1; num <= n; num++) {

//         if(is_prime(num)) {
//             console.log(num + ' is prime.');
//         } else {
//             console.log(`${num} is not prime.`);
//         }
//     }

// }


// find_all_primes(30);



// VERSION 3 using Sieve of eratosthenes

// TO:DO