/**
 * Write a function in JS to return a random 
 * alphanumeric(a-Z, A-Z, 0-9) password of size 10 characters
 */

function password_generator() {
    const CHAR_SET = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9'
    ];
    const PASSWORD_CHAR_COUNT = 10;

    let random_password = '';

    for (let i = 0; i < PASSWORD_CHAR_COUNT; i++) {
        const rand_index = Math.floor(Math.random() * CHAR_SET.length);
        random_password += CHAR_SET[rand_index];
    }

    return random_password;
}


console.log(password_generator()); // asdf7845As
console.log(password_generator()); // 9sdfsds45As
console.log(password_generator()); // csdf7845As


//Approach 2: use ASCII generate characters insteaf of a prefilled character set.