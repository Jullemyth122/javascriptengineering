class HashMap {
    constructor(nums) {
        this.maps = new Map();
        this.nums = nums
    }

    twoSum(target) {

        for(let i = 0; i < this.nums.length; i++) {
            const num = this.nums[i]
            console.log(num)

            console.log(this.maps, target - num, i)

            if(this.maps.has(num)) {
                return [this.maps.get(num), i];
            }

            this.maps.set(target - num, i);
        }

        return []
    }

    groupAnagrams( strs ) {
        let map = this.maps;
        
        for(let s of strs) {
            let key = s.split('').sort().join('');

            if(!map.has(key)) map.set(key, []);
            map.get(key).push(s); 
        }

        // console.log(map);

        console.log(Array.from(map.values()))
        // return Array.from(this.maps.values()) ;
    }



    subsetAnagrams( strs ) {

        const groups = this.maps; // sortedKey -> [words]
        for (const s of strs) {
            const key = s.split('').sort().join('');
            
            if (!groups.has(key)) groups.set(key, []);
            
            groups.get(key).push(s);
        }

        // 2) Pick the group with the longest words
        let baseKey = null, maxLen = 0;
        for (const [key, words] of groups.entries()) {
            if (key.length > maxLen) {
                maxLen = key.length;
                baseKey = key;
            }
        }
        const fullAnagrams = groups.get(baseKey);

        // 3) Build letter‐count map for the base
        const baseCount = {};
            for (const ch of baseKey) {
            baseCount[ch] = (baseCount[ch] || 0) + 1;
        }

        // 4) For every input word shorter than the base, test as sub-anagram
        const subAnagrams = []; outer:
            for (const s of strs) {
            if (s.length >= maxLen) continue;  // skip full‐length or longer
            // build count for s
            const cnt = {};
            for (const ch of s) {
                cnt[ch] = (cnt[ch] || 0) + 1;
                // early exit if over the base map
                if (cnt[ch] > (baseCount[ch] || 0)) {
                continue outer;
                }
            }
            // if we got here, all counts fit
            subAnagrams.push(s);
        }

        return [fullAnagrams, subAnagrams, groups];
    }

}

// let hashmap = new HashMap([2,7,11,1,15]);
let hashmap = new HashMap();

// console.log(hashmap.twoSum(22))

// hashmap.groupAnagrams(["apple","pplea","cat","tac","act","tca","alppe","drum","nigga"])

// hashmap.subsetAnagrams(["mountain", "tainmoun","unmotain","tannioum","aunt","mount","main"])
let words = ["mountain", "tainmoun","unmotain","tannioum","aunt","mount","main", "nigga", " what", "that"]

const [full, subs, anagrams] = hashmap.subsetAnagrams(words);

console.log("Anagrams:", anagrams);

console.log("Full‐length anagrams of the base:", full);
// → [ 'mountain', 'tainmoun', 'unmotain', 'tannioum' ]

console.log("Sub-anagrams (subset of letters):", subs);
// → [ 'aunt', 'mount', 'main' ]


