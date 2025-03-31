function isSubset(a, b) {

    const map = {};

    for (let num of a) {
        
        // Counts multiple same values 
        map[num] = (map[num] || 0) + 1;
    }

    console.log(map);
    for (let num of b) {

        if (!map[num]) {
            // If the element doesn't exist or has been used up, b is not a subset of a
            return false;
        }

        // reduce the counds of multiple values
        map[num]--;
    }

    return true;
}

const a1 = [11, 7, 1, 13, 21, 3, 7, 3, 7, 10,11];
const b1 = [11, 3, 7, 1, 7, 10, 11];
console.log(isSubset(a1, b1));

const a2 = [10, 5, 2, 23, 19, 3, 5, 5, 10];
const b2 = [19, 5, 3, 10, 10];
console.log(isSubset(a2, b2)); 
