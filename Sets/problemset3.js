class Solution {
    constructor(arr1, arr2, arr3) {
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.arr3 = arr3;
    }

    hasIntersection(arrA, arrB) {
        const setA = new Set(arrA);
        return arrB.some(item => setA.has(item));
    }

    countAppearances() {
        const counts = new Map();
        const arrs = [this.arr1, this.arr2, this.arr3]
        for (const arr of arrs) {
            console.log(arr)
            for (const x of new Set(arr)) {          // de‑duplicate within one array
                counts.set(x, (counts.get(x) || 0) + 1);
                console.log(counts)
            }
        }
        return counts;
    }

    venDiagram(arr1 = this.arr1, arr2 = this.arr2, arr3 = this.arr3) {

        const [A, B, C] = [arr1,arr2,arr3]

        const pairAB = this.hasIntersection(A, B);
        const pairBC = this.hasIntersection(B, C);
        const pairCA = this.hasIntersection(C, A);

        // 2) Triple (all three) check in linear time
        const counts = this.countAppearances();
        const triple = [...counts.values()].some(cnt => cnt === 3);

        console.log({
            pairAB,
            pairBC,
            pairCA,
            tripleAllThree: triple
        });

        // Ex. return: “true” only if every pair intersects and there’s at least one element in all three
        return pairAB && pairBC && pairCA && triple;
    }



}

let sol = new Solution();

// Find a array/s that has intersection if any of the array
// don't have a intersection therefore not a ven diagram. 

sol.arr1 = [10,11,17,21, 15, 16];
sol.arr2 = [15,18,19,16, 1, 33, 10, 12, 11];
sol.arr3 = [1,11,5,19,15, 12, 2];

sol.venDiagram()

sol.arr1 = [ 22, 11, 31, 55, 77, 1, 7, 9, 12, 16, 27, 35  ]
sol.arr2 = [ 11, 9, 7, 12, 1 ]
sol.arr3 = [ 9, 7, 1 ]