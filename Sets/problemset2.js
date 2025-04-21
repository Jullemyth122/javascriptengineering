class SetsArray {
    constructor(arr) {
        this.arr = arr;
    }

    removeDuplicatesFromRightToLeft() {
        
        let test = this.arr;
        let seen = {};

        for (let i = test.length - 1; i >= 0; i--) {
            // If the element is already seen, remove it
            if (seen.hasOwnProperty(test[i])) {
                test.splice(i, 1);
                // i++;
            } else {
                
                // Mark the element as seen
                seen[test[i]] = true;
            }
        }

        // console.log(seen, test);
        return test;
    }

    removeDuplicatesFromLeftToRight() {
        
        let test = this.arr;
        let seen = {};

        for (let i = 0; i < test.length; i++) {
            // If the element is already seen, remove it
            if (seen.hasOwnProperty(test[i])) {
                // console.log(i, test, test[i]);
                test.splice(i, 1);
                i--;
            } else {
                // Mark the element as seen
                seen[test[i]] = true;
            }
        }

        // console.log(seen, test);
        return test;
    }

    removeDuplicatesFromMidtoSides() {
        let arr = this.arr;
        let mid = Math.floor(arr.length / 2);
        console.log("Start:", arr, "| mid:", mid, "(", arr[mid], ")");
        
        let bestIndex = {}, removeIndices = new Set();

        for (let i = 0; i < arr.length; i++) {
            let value = arr[i],
                dist = Math.abs(i - mid);
            if (!(value in bestIndex)) {
                bestIndex[value] = i;
            } else {
                let best = bestIndex[value],
                    bestDist = Math.abs(best - mid);
                if (dist < bestDist) {
                    removeIndices.add(best);
                    bestIndex[value] = i;
                } else {
                    removeIndices.add(i);
                }
            }
        }
        
        console.log("Decisions => Best indices:", bestIndex, "| Remove indices:", Array.from(removeIndices));
        
        // Remove duplicates in descending order of indices to avoid shifting issues.
        Array.from(removeIndices)
            .sort((a, b) => b - a)
            .forEach(idx => arr.splice(idx, 1));
        
        console.log("Final array:", arr);
        return arr;
    }


    LargestNumAndLowestMod() {
        let arr = this.arr;
        console.log("Initial array:", arr);

        // Phase 1: Find the maximum value.
        let maxValue = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                console.log("New max found:", maxValue);
            }
        }
        console.log("Final max value:", maxValue);
        
        // Phase 2: Compute the mod of maxValue with every other number
        // and record the smallest remainder.
        let lowMod = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== maxValue) { // only compare when not dividing by itself
                let modVal = maxValue % arr[i];
                console.log(`Computed ${maxValue} % ${arr[i]} = ${modVal}`);
                if (modVal < lowMod) {
                    lowMod = modVal;
                    console.log("Lowest mod updated to:", lowMod);
                }
            }
        }

        console.log("Result => Largest number:", maxValue, "| Lowest mod:", lowMod);
        return { maxValue, lowMod };
    }

    MaxNumButMustLowestMod() {
        let arr = [...this.arr]; 
        arr.sort((a, b) => a - b); // Sort array in ascending order
        
        let bestCandidate = null;
        let bestMod = Infinity;
        let bestDivisor = null;

        for (let i = arr.length - 1; i >= 0; i--) {  // Iterate from largest to smallest
            let x = arr[i];
            let minMod = Infinity;
            let divisor = null;

            for (let j = 0; j < i; j++) {  // Compare only with smaller elements
                let y = arr[j];
                let modValue = x % y;

                if (modValue < minMod) {
                    minMod = modValue;
                    divisor = y;
                }
            }

            if (minMod === Infinity) { 
                minMod = x;  // If no divisor, mod is itself
                divisor = null; 
            }

            console.log(`Candidate: ${x}, Lowest Mod: ${minMod}, Divisor: ${divisor}`);

            if (minMod < bestMod || (minMod === bestMod && x > bestCandidate)) {
                bestMod = minMod;
                bestCandidate = x;
                bestDivisor = divisor;
            }
        }

        console.log("Selected Highest Number:", bestCandidate, "with lowest mod:", bestMod, "by divisor:", bestDivisor);
        return { bestCandidate, bestMod, bestDivisor };
    }

    


}

let setA = new SetsArray();

setA.arr = [10,5,5,11,5, 16, 17, 16,10,11,18,17]


let sample1 = setA.removeDuplicatesFromRightToLeft();
// console.log(sample1)

setA.arr = [10,5,5,11,5, 16, 17, 16,10,18,10,18, 10, 18]


let sample2 = setA.removeDuplicatesFromLeftToRight();
// console.log(sample2)

// setA.arr = [10, 6, 5, 6, 0, 1 ,10, 13, 6, 1, 3, 6, 13, 3] // sample 1
setA.arr = [22,1,7,2,11,1,6,2, 1,6] // sample 1
// setA.arr = [10, 6, 5, 2, 1 , 1, 3, 6, 13] // sample 1
// setA.arr = [10, 6, 5, 2, 1, 2 , 1, 3, 6, 13] // sample 2

// let sample3 = setA.removeDuplicatesFromMidtoSides();

// console.log(sample3);

setA.arr = [ 66,29, 31, 41, 51, 666,771, 113 ]

console.log(setA.arr);
let sample4 = setA.LargestNumAndLowestMod();
let sample5 = setA.MaxNumButMustLowestMod();



