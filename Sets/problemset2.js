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
                console.log(i, test, test[i]);
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




}

let setA = new SetsArray();

setA.arr = [10,5,5,11,5, 16, 17, 16,10,11,18,17]


let sample1 = setA.removeDuplicatesFromRightToLeft();
console.log(sample1)

setA.arr = [10,5,5,11,5, 16, 17, 16,10,18,10,18, 10, 18]


let sample2 = setA.removeDuplicatesFromLeftToRight();
console.log(sample2)
