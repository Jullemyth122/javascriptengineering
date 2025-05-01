class SearchString {
    constructor(string = "") {
        this.string = string;
    }

    // 1) indexOf(searchValue, fromIndex)
    indexOf(sub, pos = 0) {
        console.log(this.string.indexOf(sub, pos));
    }

    // 2) lastIndexOf(searchValue, fromIndex)
    lastIndexOf(sub, pos = this.string.length) {
        console.log(this.string.lastIndexOf(sub, pos));
    }

    // 3) search(regexpOrString)
    search(regexpOrString) {
        console.log(this.string.search(regexpOrString));
    }

    // 4) match(regexp)
    match(regexp) {
        console.log(this.string.match(regexp));
    }

    // 5) matchAll(regexp)
    matchAll(regexp) {
        // matchAll returns an iterator of MatchArrays
        const matches = Array.from(this.string.matchAll(regexp));
        console.log(matches);
    }

    // 6) includes(searchValue, fromIndex)
    includes(sub, pos = 0) {
        console.log(this.string.includes(sub, pos));
    }

    // 7) startsWith(searchValue, position)
    startsWith(sub, pos = 0) {
        console.log(this.string.startsWith(sub, pos));
    }

    // 8) endsWith(searchValue, length)
    endsWith(sub, len = this.string.length) {
        console.log(this.string.endsWith(sub, len));
    }
}


// example

const text = `
  Thunder in the sky, whilst lightning above the heaven blue. 
  Guide the Thunder, in a wonderful tornado too
`;

const S = new SearchString(text.trim());

// 1) indexOf: first occurrence of “in” after position 10
S.indexOf("in", 10);             // e.g. →  8 (because we trimmed the leading newline)

// 2) lastIndexOf: last “in” before position 80
S.lastIndexOf("in", 80);          // e.g. →  64

// 3) search: index of “Thunder” (case-sensitive)
S.search("Thunder");              // →  0

// 4) match: all “in” substrings (returns an array of the matches)
S.match(/in/g);                   // → [ "in", "in", "in", ... ]

// 5) matchAll: all “in” with their capture info
S.matchAll(/in/g);                // → [ ["in", index:8,…], ["in", index:14,…], … ]

// 6) includes: is “sky” anywhere in the string?
S.includes("sky");                // → true

// 7) startsWith: does it start with “Thunder”?
S.startsWith("Thunder");          // → false (because of the leading newline after trim)

// 8) endsWith: does it end with “tornado too”?
S.endsWith("tornado too");        // → true
