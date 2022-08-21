function correctMistake(line, incorrectWord, toBeReplacedWith) {
  
    if (!String.prototype.replaceAll) {
        String.prototype.replaceAll = function(str, newStr){

            // If a regex pattern
            if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
                return this.replace(str, newStr);
            }

            // If a string
            return this.replace(new RegExp(str, 'g'), newStr);

        };
    }
    // write code here
    // return the output , do not use console.log here

    return line.replaceAll(incorrectWord, toBeReplacedWith);
}