class StringMethods {
    constructor(
        string = "", 
        idxChar = 0, idxCharC = 0, 
        
        stN = 0, enN = 0,

        string2, string3, string4,

        pdN = 4, pdStr = "----",

        rptNth = 5, newStrRplace = "Xenodo", newStrRplaceAll = "Menace"
    ) {
        this.string = string

        // return length of string
        this.len_ = string.length
        // return char at certain string index;
        this.c_idx = string.charAt(idxChar);
        // return unicode number of certain string # UTF-16 code (an integer between 0 and 65535)
        this.c_at_idx = string.charCodeAt(idxCharC);  

        // access in string by index
        this.acc_string = string[idxChar];
    
        // Extraction in String ( start, end) of index 
        // but it can do negative it will starting counting from the end 
        this.sli = string.slice(stN, enN);

        // negatives counted it as 0.
        this.subs = string.substring(stN, enN);

        // uppercase of string or char
        this.upCase = string.toUpperCase() 
        // lowercase of string or char
        this.lowCase = string.toLowerCase()

        // combine two or more strings
        this.concat_ = string.concat(string2, string3, string4)
        // Remove any whitespaces in string from left and right while trimStart() only trims from left
        // and trimEnd() only trims from right
        this.trims_ = string.trim()

        // padStart, padEnd() this added string which will be start or end
        this.padS_ = string.padStart(pdN,pdStr)
        this.padE_ = string.padEnd(pdN, pdStr)

        // The repeat() method returns a string with a number of copies of a string.
        // The repeat() method returns a new string.
        // The repeat() method does not change the original string.
        this.rpt = string.repeat(rptNth)

        // The replace() method replaces a specified value with another value in a string:
        // To replace all matches, use a regular expression with a /g flag (global match):
        // To replace case insensitive, use a regular expression with an /i flag (insensitive):

        this.rplace = string.replace(this.sli, newStrRplace)
        this.rplaceAll = string.replaceAll("a", newStrRplaceAll)

        // A string can be converted to an array with the split() method:
        // If the separator is omitted, the returned array will contain the whole string in index [0].

        // If the separator is "", the returned array will be an array of single characters:
        this.spl = string.split("")
    }



}

let simple_string = "Rin Umehara"

let str_methods = new StringMethods(
    "Rin Umehara", idxChar = 0, idxCharC = 2,
    stN = 5, enN = simple_string.length - 3,

    " ", "XENEX", " Allifwant13"
);

// console.log(str_methods.sli)
// console.log(str_methods.subs)
console.log(str_methods.concat_)
console.log(str_methods.rplace)
console.log(str_methods.rplaceAll)
console.log(str_methods.spl)
// let sl = str_methods.rplaceAll