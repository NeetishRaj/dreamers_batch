function reverseWords(str){
    // write code here
    // use console.log to print output


    const words = str.split(" ");
    const result_array = [];

    for (let i = 0; i < words.length; i++) {
        
        const reversed_word = words[i]
            .split('')
            .reverse()
            .join('');

        result_array.push(reversed_word);
    }

    console.log(result_array.join(' '));
}

const result = reverseWords('Welcome to this Javascript Guide!')
console.log(result);
