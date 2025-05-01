class HashTable {
    constructor(size) {
        this.size = size
        this.table = Array.from({ length: size }, () => ({}));

        // For object (and function) keys:
        this._objIds     = new WeakMap();
        this._nextObjId  = 1;
    }

    _getKeyString(key) {
        const type = typeof key 

        if( key == null || type === "undefined" || 
            type === "number" ||
            type === "boolean" ||
            type === "string" ||
            type === "symbol"
        ) return String(key)

        if(!this._objIds.has(key)) {
            this._objIds.set(key, `__obj${this._nextObjId++}__`);
        }

        return this._objIds.get(key);

    }

    hash(key) {

        let total = 0;

        const keyStr = this._getKeyString(key);


        for(let i = 0; i < keyStr.length; i++) {
            // console.log(total)
            // total += keyStr.charCodeAt(i)
            total += keyStr.charCodeAt(0)

        }

        // console.log(total, this.size, total % this.size)
        return total % this.size;
    }

    set(key,value) {
        const index = this.hash(key);
        const keyStr = this._getKeyString(key);

        // This only works if the table of arrays are [] not an Object {}

        // this.table[index] = value;
        // const bucket = this.table[index]
        // if(!bucket) {
        //     this.table[index] = [[keyStr,value]]
        // } else {
        //     // console.log(bucket, key, bucket[0] == key)

        //     // Finds if the key has the same key in the hash map
        //     const sameKeyItem = bucket.find(item => item[0] == key)
        //     // console.log(sameKeyItem)
        //     if(sameKeyItem) {
        //         // Adding value "a.k.a string or number" to the same key
        //         // sameKeyItem[1] =  sameKeyItem[1] + value
                
        //         // Replacing the value of the same key
        //         sameKeyItem[1] = value
        //     } else {
        //         bucket.push([keyStr,value]) 
        //     }
        // }

        // direct property assignment: O(1)
        this.table[index][keyStr] = value;
    
    }

    get(key) {
        const index = this.hash(key)
        const keyStr = this._getKeyString(key);
        const bucket = this.table[index];
        
        // This only works if the table of arrays are [] not an Object {}
        // if(bucket) {
        //     const sameKeyItem = bucket.find(item => item[0] === keyStr)
        //     if(sameKeyItem) {
        //         return sameKeyItem[1]
        //     } 
        // }

        // return undefined
        return bucket.hasOwnProperty(keyStr) ? bucket[keyStr] : undefined

    }

    exist(key) {
        const index = this.hash(key);

        const keyStr = this._getKeyString(key);

        return this.table[index].hasOwnProperty(keyStr);
    }

    remove(key) {
        const index = this.hash(key)
        // this.table[index] = undefined;

        const keyStr = this._getKeyString(key);

        // Only works for the in hashmap [] but not in {}
        // const bucket = this.table[index]
        // if(bucket) {
        //     const sameKeyItem = bucket.find(item => item[0] === keyStr) 
        //     if(sameKeyItem) {
        //         bucket.splice(bucket.indexOf(sameKeyItem))
        //     }
        // }

        delete this.table[idx][keyStr];  // O(1)

        
    }
 
    display(i = 0) {

        // if(i >= this.table.length) return
        // else 
        //     if(this.table[i]) console.log(i, this.table[i])

        //     this.display(i + 1)
        console.log(this.table)

        this.table.forEach((bucket, i) => {
            const keys = Object.keys(bucket);
            if (keys.length) {
                console.log(`Bucket ${i}:`, keys.map(k => [k, bucket[k]]));
            }
        });


    }

}

const table = new HashTable(10)

// console.log(table.table)

// table.set("name_1", "Bruce")
// table.set("age_1", 25)
// table.display()

// console.log(table.get("name"));

// table.set("name_1", "Clark")
// table.set("age_2", 37)
// table.display();

// table.set("name_3", "Clarkey")
// table.set("age_3", 18)


// table.set("galaxy_3", "Aurora")
// table.set("lightage1", 18000)

// table.set("gccccc_a", "Aurora2")
// table.set("gcccbbbb", "Borealis")
// table.set("gcccccbb", "Borealis")
// table.set("lightage1", 18000)

table.set(10, 10)
table.set(101, 12)
table.set(1011, 16)

table.set(1, 1)
table.set(2, 10)
table.set(3, 17)
table.set(11, 12)
table.set(111, 16)

// table.remove("name");
// table.display();
// console.log(table.table)
console.log(table.table)

console.log(table.get(101))
console.log(table.get(111))
console.log(table.exist(101))

table.display()