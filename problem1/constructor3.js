// This code is all about finding the fast best way searching algorithms

class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key, value) {
        const newNode = new TreeNode(key, value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (key < current.key) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(query) {
        let current = this.root;
        let results = [];
        while (current) {
            if (current.key.toLowerCase().includes(query.toLowerCase())) {
                results.push({ [current.key]: current.value });
            }
            if (query < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return results;
    }
}

class Search {
    constructor(data) {
        this.data = data;
        this.dataMap = {}; // HashMap
        this.bst = new BinarySearchTree();

        data.forEach(item => {
            const key = Object.keys(item)[0];
            this.dataMap[key.toLowerCase()] = item[key]; // HashMap insertion
            this.bst.insert(key, item[key]); // BST insertion
        });
    }

    linearSearch(query) {
        console.time("Linear Search Time");
        const results = this.data.filter(item => {
            const keys = Object.keys(item)[0];
            return keys.toLowerCase().includes(query.toLowerCase());
        });
        console.timeEnd("Linear Search Time");
        return results;
    }

    hashMapSearch(query) {
        console.time("HashMap Search Time");
        const results = [];
        query = query.toLowerCase();
        for (const key in this.dataMap) {
            if (key.includes(query)) {
                results.push({ [key]: this.dataMap[key] });
            }
        }
        console.timeEnd("HashMap Search Time");
        return results;
    }

    bstSearch(query) {
        console.time("BST Search Time");
        const results = this.bst.search(query);
        console.timeEnd("BST Search Time");
        return results;
    }

    displayResults(results) {
        const container = document.querySelector(".sample-data");
        container.innerHTML = ""; // Clear previous results
        
        if (results.length === 0) {
            container.innerHTML = "<p>No results found</p>";
            return;
        }

        const ul = document.createElement("ul");
        results.forEach(item => {
            const key = Object.keys(item)[0];
            const li = document.createElement("li");
            li.textContent = `${key}: ${item[key]}`;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
}

// Sample dataset (1,000 random food entries)
const foodNames = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
    "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato", "Ugli", "Vanilla",
    "Watermelon", "Xigua", "Yam", "Zucchini", "Blueberry", "Cantaloupe", "Dragonfruit", "Eggplant", "Gooseberry",
    "Huckleberry", "IndianFig", "Jackfruit", "Kumquat", "Lychee", "Mulberry", "Nance", "Olive", "Plantain",
    "Quandong", "Rambutan", "Sapodilla", "Tamarillo", "Uvaia", "Voavanga", "Walnut", "Xoconostle", "Yumberry", "Zinfandel"
];

const sampleData = Array.from({ length: 1000 }, () => {
    const randomFood = foodNames[Math.floor(Math.random() * foodNames.length)]; // Random food name
    const randomNumber = Math.floor(Math.random() * 100); // Random number (0-99)
    return { [randomFood]: randomNumber };
});

console.log("Generated Sample Data:", sampleData);

const searchInstance = new Search(sampleData);

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search...");
    document.body.insertBefore(searchInput, document.querySelector(".sample-data"));

    searchInput.addEventListener("input", () => {
        const query = searchInput.value;
        console.log("\n--- Performance Comparison ---");
        const linearResults = searchInstance.linearSearch(query);
        const hashMapResults = searchInstance.hashMapSearch(query);
        const bstResults = searchInstance.bstSearch(query);
        
        // Choose the method to display (change if needed)
        searchInstance.displayResults(hashMapResults);
    });
});
