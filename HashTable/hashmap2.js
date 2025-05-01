class HashMap {
    constructor() {
        this.globalMaps = new Map();
    }

    isSubset(a,b) {
        const maps = this.globalMaps;
        
        for(let num of b) {
            // console.log(num)
            maps.set(num, (maps.get(num) || 0 ) + 1 )
        }

        console.log(maps)

        for(let num of a) {
            const sec = maps.get(num) || 0;
            console.log(sec, maps.get(num), num)

            if(sec == 0) {
                return false;
            }

            maps.set(num, sec - 1 )
        }

        console.log(maps)

        return true;

    }      

    isAllDoubled(b) {
        const maps = this.globalMaps;
        for(let num of b) {
            maps.set(num, (maps.get(num) || 0 ) + 1)
        }

        for(let [key,values] of maps.entries()) {
            console.log(key, values)
            if(values !== 2) {
                maps.set(key, `False is not doubled (2) but ${values}`);
            } 
        }
        return maps
    }

    arraySums(arr) {
        const maps = this.globalMaps;

        // let count = 0;    
        for(let j of arr) {
            maps.set(j,  (maps.get(j) || 0) + j);
        }
        
        console.log(maps)
        const pairs = [];
        for (const [v, sum] of maps.entries()) {
            if (maps.has(sum) && v !== sum) {
                pairs.push([ v, sum ]);
            }
        }

        return pairs;

    }


    findUnique(k, arr){
        let a = new Map();
        
        for(let j of arr) {
            a.set(j,  (a.get(j)|| 0) + 1 )
        }

        // const seen = new Set();
        // const result = [];
        
        // for(const x of arr) {
        //     if(a.get(x) !== k && !seen.has(x)) {
        //         result.push(x);
        //         seen.add(x);
        //     }
        // }
        
        // return result;
            
        // Find the one whose count isn’t a multiple of k
        for (const [num, cnt] of counts) {
            if (cnt % k !== 0) {
            return num;
            }
        }

    }
    
}

// Check if every number in a first list is a subset of second list. 
// otherwise it returns not.

let hashmap = new HashMap();

let a = [1, 7, 5, 10, 10, 10]
let b = [10,11,1,7, 13, 5, 6, 10, 3]

// console.log(hashmap.isSubset(a,b))


let b_ = [1,3,6,1,6,5,10,10, 6];
// console.log(hashmap.isAllDoubled(b_))

let a_ = [1,1,1,3, 5, 5, 5, 5, 20, 6, 10, 10, 20, 30];
console.log(hashmap.arraySums(a_))



