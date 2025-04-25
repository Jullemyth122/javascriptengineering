class Recursion {
    constructor(num) {
        this.num = num
    }

    findAllSum(n = this.num) {
        
        if(n == 0) return 0

        return n + this.findAllSum( n - 1 )
    }

    printFun(num = this.num) {
        if (num < 1)
            // if number below to 1 it returns it.
            return;
        else {
            // recursion starts here
            console.log(num);
            this.printFun(num - 1); // statement 2 - this will keep loop until the num < 1 is done.

            if (num == 1) {
                console.log("------")
            }
            // this will only be printed after the recursion is done
            console.log(num);
            // return num;
        }
    }

    largest(x, arr) {
        // console.log(x, arr)
        let val;
        // console.log(val)

        // Length of the array
        if( x == 1 ) {
            return arr[0];
        } else {
            val = this.largest(x - 1, arr)
            // console.log(val, x - 1)
        }

        console.log(val, x - 1);

        if( val > arr[x - 1]) { 
            return val;
        }
        else {
            return arr[x - 1];
        }

    }

    lowest(x, arr) {
        let val 

        if(x == 1) {
            return arr[0]
        } else {
            val = this.lowest(x - 1, arr)
        }

        if( val < arr[x - 1] ) {
            return val;
        } else {
            return arr[x - 1]
        }
    }

    doubleArraySum(arr, length) {
        if(length === 0) return 0

        
        console.log(arr[length - 1], length)
        return (
            arr[length - 1] + this.doubleArraySum(arr, length - 1) + arr[length - 1]
        );

        // doubleArraySum(5)
        // ├─= arr[4] (11)
        // ├─+ doubleArraySum(4)
        // │    ├─= arr[3] (21)
        // │    ├─+ doubleArraySum(3)
        // │    │    ├─= arr[2] (3)
        // │    │    ├─+ doubleArraySum(2)
        // │    │    │    ├─= arr[1] (7)
        // │    │    │    ├─+ doubleArraySum(1)
        // │    │    │    │    ├─= arr[0] (1)
        // │    │    │    │    ├─+ doubleArraySum(0) → 0 (base case)
        // │    │    │    │    └─+ arr[0] (1)
        // │    │    │    │      = 1 + 0 + 1 = **2**
        // │    │    │    └─+ arr[1] (7)
        // │    │    │      = 7 + 2 + 7 = **16**
        // │    │    └─+ arr[2] (3)
        // │    │      = 3 + 16 + 3 = **22**
        // │    └─+ arr[3] (21)
        // │      = 21 + 22 + 21 = **64**
        // └─+ arr[4] (11)
        // = 11 + 64 + 11 = **86**

    }

    skipArraySum(arr, length, skip) {
        // if(arr.length < skip) return " Out of bounds";
        if(length <= 0) return 0;


        return arr[0] + this.skipArraySum(arr.splice(skip), length - skip, skip) ;
    }

    reverseString(string, subspace) {
        if(string === "") {
            return "";
        } else {
            return this.reverseString(string.substring(subspace), subspace) + string[0]
        }
    }    

    swapPairs(s) {
        if(s.length <= 1) {
            return s;
        }

        return s[1] + s[0] + this.swapPairs(s.substring(2))
    }

    multipleRecursion(arr1, arr2, i = 0, first = [], second = []) {
        
        console.log(i)
        if(i >= arr1.length && i >= arr2.length) {
            return { first, second }
        }

        if (i < arr1.length) {
            if(arr2[i] == undefined) {
                
            }

            first.push(arr1[i]); 
        }

        if (i < arr2.length) {
            // console.log(arr[i])
            if(arr1[i] == undefined) {
                
            }
            second.push(arr2[i])
        }

        // console.log(first[i], second[i])
        return this.multipleRecursion(arr1, arr2, i + 2, first, second);
        
         // i + n is a n by n step
         // i * 2 is a 2^n step
        //  i  is a 2 by 2 step

    }

        
    // 3. Range of Integers Using Recursion

    // Write a JavaScript program to get integers in the range (x, y) using recursion.

    // Example : range(2, 9)

    // Expected Output : [3, 4, 5, 6, 7, 8]

    rangeRecursion(start, end, steps = 2, arr = []) {
        start = start + steps;
        let output;

        if(start >= end) {
            return start;
        } 
        else {
            arr.push(start)
            output = this.rangeRecursion(start,end, steps , arr)

        }

        return arr;
    }


    // 5. Exponentiation

    // Write a JavaScript program to compute the exponent of a number.

    // Note : The exponent of a number says how many times the base number is used as a factor.

    // 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.        
    // 2 ^ 3 = 2 x 2 x 2 = 8 
    // 2 ^ 4 = 2 x 2 x 2 x 2 = 16
    // 3 ^ 3 = 3 x 3 x 3 = 27


    // This function is to find the base and exp of the number given.
    exponentialRecursion(integer, base = 2, exp = 0) {
        
        if( (integer / (Math.pow(base,exp))) == 1 ) return [base,exp];

        let val;

        if( (integer % (Math.pow(base,exp))) == 0  ) {
            
            val = this.exponentialRecursion(integer, base, exp + 1 )
        } 

        else {
            val = this.exponentialRecursion(integer, base + 1, exp )
        }

        return val

    }

    exponentSimplification(base,exp) {
        if ( exp == 0 ) {
            return 1;
        } else {
            return base * this.exponentSimplification(base, exp - 1);
        }
        
    }

    fibSequence(nth) {
        if(nth <= 1) return [ 0, 1 ];

        let s = this.fibSequence(nth - 1);
             
        console.log(nth - 1)
        s.push( (s[s.length - 1] + s[s.length - 2]) + (nth - 1)  )

        return s.slice(0, nth);

    }

    brSearch(arr, target, low = 0, high = arr.length - 1) {
        if (low > high) {
            // Not found
            return -1;
        }

        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (target < arr[mid]) {
            return this.brSearch(arr, target, low, mid - 1);
        }
        else {
            return this.brSearch(arr, target, mid + 1, high);
        }
    }

    linearSearch(arr, target, i = 0) {
        if ( i >= arr.length) return -1;
        if(arr[i] === target ) return i;
        return this.linearSearch(arr, target, i + 1);
    }

    




    isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    swapPairsByPrime(s) {
        if(s.length <= 1) {
            return s;
        }


        let primeIndices = [];
        for (let i = 0; i < s.length; i++) {
            if (isPrime(i + 1)) {
                primeIndices.push(i);
            }
        }

        if (primeIndices.length < 2) {
            return s;
        }

        let primeBefore = primeIndices[0];
        let primeAfter = primeIndices[1];

        let chars = s.split('');
        let temp = chars[primeBefore];
        chars[primeBefore] = chars[primeAfter];
        chars[primeAfter] = temp;

        let middle = s.substring(primeBefore + 1, primeAfter);
        let swappedMiddle = swapPairsByPrime(middle);

        return (
            chars.slice(0, primeBefore).join('') +
            chars[primeBefore] +
            swappedMiddle +
            chars[primeAfter] +
            chars.slice(primeAfter + 1).join('')
        );
    }



}

let recurse = new Recursion(5);

// console.log(recurse.findAllSum())


// let arr = [1,7,3,21, 11, 27.9, 18];
let arr = [1,7,3,21, 11, 16, 17];
let arr2 = [6,6,1, 18, 37, 33, 29, 27, 55, 21];
// recurse.printFun()

// console.log(
//     recurse.largest(arr.length, arr),
//     // recurse.lowest(arr.length, arr)
// )

let sum = 0
// console.log("Peak Add", recurse.doubleArraySum(arr, arr.length))
// console.log("Add", recurse.skipArraySum(arr, arr.length, 3))
// console.log("Reverse", recurse.reverseString("dadamamahehefg", 1))
// console.log("Swap Pairs", recurse.swapPairs("dadamamahehefg"))
// console.log("Swap Pairs By Prime", recurse.swapPairs("Hello Little Darling, I'm at home, how are you today. I miss you alot."))
// console.log("Try passing array:", recurse.multipleRecursion(arr,arr2))
// console.log(recurse.rangeRecursion(2,9))
// console.log(recurse.exponentialRecursion(16));
console.log("--------")
// console.log(recurse.exponentialRecursion(27));
// console.log(recurse.exponentialRecursion(625));
// console.log(recurse.exponentSimplification(4,5));
// console.log(recurse.exponentSimplification(5,5));

// console.log(recurse.fibSequence(10))


let sorted = [...arr2].sort( (a,b) => a - b );
console.log( sorted, recurse.brSearch(sorted, 21) );
console.log( arr2, recurse.linearSearch(arr2, 29) );
// "xxsada".substring