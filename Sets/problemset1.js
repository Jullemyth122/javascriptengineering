class SetsArray {
    constructor(arr) {
        this.arr = arr;
    }
    // Function returns the second largest element
    getSecondLargest() {
        
        // First Way to code

        // let a = this.arr[0];
        // let maxVal = Math.max(...this.arr);
        
        // for(let i = 0; i < this.arr.length; i++) {
        //     if(a < this.arr[i]) {
        //         a = this.arr[i]
        //     }
        // }
        
        // this.arr = this.arr.filter((el) => el != a);
        
        // if (this.arr.length === 0 ) {
        //     return -1;
        // } 
        
        // let b = this.arr[0];
        
        // for(let j = 0; j < this.arr.length; j++) {
        //     if(b < this.arr[j]) {
        //         b = this.arr[j];
        //     } 
        // }

        // if (a > b) {
        //     return b;
        // } else {
        //     return -1;
        // }
        
        // Second Way to code
        let orig = this.arr[0]
        let a = this.arr[0]
        let maxVal = Math.max(...this.arr);
        let single = false;
        
        for(let i = 0; i < this.arr.length; i++) {
            
            // console.log(a, maxVal, this.arr[i])
            // console.log(a < maxVal, a < this.arr[i]);
            if(a != this.arr[i]) {
                // console.log('enters')
                single = true;
            }
            
            if(a < this.arr[i]) {
                if ( this.arr[i] != maxVal) {
                    // console.log(this.arr[i], "----");
                    a = this.arr[i];
                } 
            } 
            else if(a == maxVal) {
                a = this.arr[(i + 1) % this.arr.length];
            }
        }
        
        // console.log(a, orig, single)
        // console.log(a)
        if (orig == a && !single) {
            // console.log("debug")
            return -1;
        }
        
        // console.log(a)
        return a;

        // let largest = -1;
        // let second_largest = -1;
        
        // for(let num of arr) {
        //     if(num > largest) {
        //         second_largest = largest;
        //         largest = num;
        //         console.log(largest,second_largest,num, "----");
        //     } else if(num > second_largest && num < largest) {
        //         console.log(largest,second_largest,num, "||||");
        //         second_largest = num;
        //     }
        // }
        
        // return second_largest;
        
    }
}

let s1 = new SetsArray();
s1.arr = [12,35,1,10,34,1]



class Solution {
    // Function returns the nth largest distinct element
    getNthLargest(arr, nthLargest) {
        // Error check: nthLargest must be at least 1.
        if (nthLargest < 1) {
            console.error("Error: nthLargest must be at least 1.");
            return -1;
        }
        
        // Initialize the top array with a sentinel value (-1)
        // Since the problem constraints say arr contains positive integers,
        // -1 works as a default value.
        let top = new Array(nthLargest).fill(-1);
        
        // Iterate over each element in the array
        for (let num of arr) {
            // Skip if the number is already in top (to ensure distinct values)
            if (top.includes(num)) continue;
            
            // Iterate over the positions in our top list
            for (let i = 0; i < nthLargest; i++) {
                if (num > top[i]) {
                    // Shift elements to make room for the new number.
                    // We shift from the end of the array down to index i.
                    for (let j = nthLargest - 1; j > i; j--) {
                        top[j] = top[j - 1];
                    }
                    top[i] = num;
                    break; // Move to the next number in the array
                }
            }
        }
        
        // Check if the nth largest was actually found.
        if (top[nthLargest - 1] === -1) {
            console.error(`Error: nthLargest is out of bounds. There are fewer than ${nthLargest} distinct elements.`);
            return -1;
        }
        
        return top[nthLargest - 1];
    }
}

// Example usage:
let solution = new Solution();
console.log(solution.getNthLargest([2, 35, 35, 10,15, 26], 2)); 
console.log(solution.getNthLargest([2, 35, 35, 10, 33, 1], 5)); 
// console.log(solution.getNthLargest([2, 35, 35, 10, 7 ,7 8], 4)); 


class Solution {
    subarraySum(arr, target) {

        // arr[] non-negative integers  0 < n;
        
        // Summation of the integers in a starting point to ending point index.
                
        
        // target = 20
        // [3,5,12,5,13,2]
        // two possibilities
        // 3+5+12 = 20
        // 5 +13 + 2 = 20;
        
        let sum = 0;
        let found = -1;
        let start = true;
        
        for(let i = 0; i < arr.length; i++) {
            
            // Array scan shrinking as it moves the array.
            for(let j = 0; j < arr.length - i; j++) {
                
                sum += arr[i + j];
                
                if(sum == target) {
                    found = [i + 1, i+j + 1];
                    
                    return found;
                }
                
                // console.log(sum, i, j);
                
            }
            
            sum = 0;
        }
        

        return [found];

    }
}


let sol = new Solution();

// let arr = [1,2,3,7,5]
// let arr = [5,3,4]
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr = [1,7,2,11,23,1,1,9,1]
let arr = [26,3,28,7]
let target = 52;

// sol.subarraySum(arr,target);
console.log(sol.subarraySum(arr,target));



class Solution {
    subarraySum(arr, target) {

        // arr[] non-negative integers  0 < n;
        
        // Summation of the integers in a starting point to ending point index.
        
        // Time complexity is O(n^2) since it scan every array repeatedly
        
        
        // target = 20
        // [3,5,12,5,13,2]
        // two possibilities
        // 3+5+12 = 20
        // 5 +13 + 2 = 20;
        
        let sum = 0;
        let found = -1;
        let start = 0;
        
        for(let end = 0; end < arr.length; end++) {
            
            sum += arr[end];
            
            // while looping the sum arrays it must be lowest than the target.
            // array index must not be bigger than target

            // Shrinking if the all addition of arrays is big enough by start of the array to the endpoint of additions
            
            while( sum > target && start <= end ) {
                
                sum -= arr[start];
                start++;
                
            }
            
            if(sum == target) {
                return [start + 1, end + 1]
            }
            
            // sum = 0;
        }
        

        return [found];

    }
}



class Solution {

    thirdLargest(arr) {
        let x = 3 // this is count of largest
        
        
        let store = new Set()
        let thirdLarge = Math.max(...arr)
        if (arr.length >= 3) {
            for (let i = 0; i < x ; i++) {
                thirdLarge = Math.max(...arr)
                const index = arr.indexOf(thirdLarge);
                arr.splice(index, 1)
            }
            
            console.log(thirdLarge)
        
        } else {
            return -1;
        }

    }
}

// let sol = new Solution()

// sol.thirdLargest([5,5,5])