// Mario  
//          1 1
//         11 11
//        111 111 
//       1111 1111
//      11111 11111
// 
// 
// 

// line of " " decreases as n expand and 1 increase as n expand

let input = 10;

let str = "";
let temp = "";

for(let i = 0; i < input; i++) {
    str += "1";
    
    for(let j = 0; j < input - i; j++) { 
        temp += " ";
    }

    console.log(temp + str + " " + str);

    temp = ""
}
