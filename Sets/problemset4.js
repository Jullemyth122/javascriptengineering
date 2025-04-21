class Solution {
    constructor(arr1, arr2, arr3, arr4) {
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.arr3 = arr3;
        this.arr4 = arr4;
    }

    subsetXtoY(arrX, arrY) {
        const setX = new Set(arrX);

        if(arrY.every(elem => setX.has(elem))) {
            return {"Subsets" : arrY.every(elem => setX.has(elem))}
        } else if (arrY.some(elem => setX.has(elem))) {
            return { "Intersection_Sets" : arrY.some(elem => setX.has(elem))}
        } else {
            return { "Disjoint Sets": arrY.map(elem => elem) }
        }

    }

    Subsets() {
        const [A, B, C, D] = [this.arr1, this.arr2, this.arr3, this.arr4]
        const subsetsAB = this.subsetXtoY(A, B);  
        const subsetsBC = this.subsetXtoY(B, C);  
        const subsetsAC = this.subsetXtoY(A, C);  
        const subsetsAD = this.subsetXtoY(A, D);  
        
        // console.log(subsetsAB)
        console.log(
            subsetsAB,
            subsetsBC,
            subsetsAC,
            subsetsAD,
        )
        return
    }

}

let sol = new Solution();


sol.arr1 = [ 22, 11, 31, 55, 77, 1, 7, 9, 12, 16, 27, 35  ]
sol.arr2 = [ 11, 9, 7, 12, 1 ]
sol.arr3 = [ 9, 7, 1, 2 ]
sol.arr4 = [ 3, 10 ]


sol.Subsets()

