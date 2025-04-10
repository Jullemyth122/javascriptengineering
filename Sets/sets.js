

class Sets {
    
    constructor(collection) {
        this.collection = collection;
        
    }

    // this method will check if there any presense of an element in the set
    has(element) {
        return this.collection?.indexOf(element) !== -1;
    }

    // this method will return all the values of set 
    values() {
        return this.collection;
    }

    // thiis method will return all the values in the set
    add(element) {
        if (!this.has(element)) {
            this.collection?.push(element);
            return true;
        }
        return false;
    }

    // this method to remove the certain element of set
    remove(element) {
        if (this.has(element)) {
            const index = this.collection?.indexOf(element);
            this.collection?.splice(index, 1);
            return true;
            
        }

        return false;
    }

    size() {
        return this.collection?.length;
    }

    // This is the union of sets that will combine  the two sets
    union(otherSet) {
        var unionSet = new Sets(this.collection);
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach((elem, index) => {
            unionSet.add(elem);
        })
        secondSet.forEach((elem, index) => {
            unionSet.add(elem);
        })

        return unionSet;
    }

    // This one is the similar sets that will combine by two sets
    intersection(otherSet) {
        var intersectionSet = new Sets(this.collection);
        var firstSet = this.values();
        firstSet.forEach((elem, index) => {
            if (otherSet.has(elem)) {
                intersectionSet.add(elem);
            }
        })

        return intersectionSet;
    }

    // This one will find the difference of set that is not intersect
    difference(otherSet) {
        var differenceSet = new Sets(this.collection);
        var firstSet = this.values();
        firstSet.forEach((elem, index) => {
            if(!otherSet.has(elem)) {
                differenceSet.add(elem);
            }
        })
        return firstSet
    }

    subset(otherSet) {
        var firstSet = this.values();
        return firstSet.every((elem, index) => {
            return otherSet.has(elem);
        });
        
    }

    // subsetOfSubSets(otherSet) {
    //     var firstSet = this.values();
    //     const result = firstSet.every((elem, index) => {
    //         return otherSet.has(elem);
    //     })
    //     if (result == true) {
            
    //     }
    // }



}

// Create collections outside the class
let collectionA = ['d', 'd'];
let collectionB = ['b', 'c', 'a', 'd'];

// Pass the same external collections to different sets
let setA = new Sets(collectionA);
let setB = new Sets(collectionB);


// Test intersection
// console.log(setA.intersection(setB).values()); // Should return ['a', 'd']
// console.log(setA.intersection(setB).values()); // Should return ['a', 'd']

// Modify one set and see that it doesn't affect the other (since intersection creates a copy)
setA.add("x");
setA.add("m");
setA.add("i");

// console.log(setA.values()); // Should show ['a', 'd', 'x', 'm', 'i']
// console.log(setB.values()); // Should still show ['b', 'c', 'a', 'd']


// console.log(setA.intersection(setB).values()); // Should return ['a', 'd']


let setC = new Sets([]);

setC.add('m');
setC.add('j');
setC.add('i');
setC.add('b');
setC.add('q');
setC.add('u');
setC.add('a');
setC.add('c');
setC.add('d');
setC.add('x');
setC.add('z');

console.log(setC.values())
console.log(setA.values())
x = setB.subset(setC)

if (x) {
    console.log(setA.subset(setC))
}

setC.remove('a');

console.log(setB.subset(setC))
console.log(setA.subset(setC))