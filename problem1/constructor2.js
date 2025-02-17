// Hashmap Searching Algorithm
// class Search {
//     constructor(data) {
//         this.dataMap = {};
//         data.forEach(item => {
//             const key = Object.keys(item)[0];
//             this.dataMap[key.toLowerCase()] = item[key]; // Store in lowercase for case-insensitive search
//         });
//     }

//     filterData(query) {
//         const results = [];
//         query = query.toLowerCase();
        
//         for (const key in this.dataMap) {
//             if (key.includes(query)) {
//                 results.push({ [key]: this.dataMap[key] });
//             }
//         }

//         return results;
//     }

//     displayResults(results) {
//         const container = document.querySelector(".sample-data");
//         container.innerHTML = ""; // Clear previous results
        
//         if (results.length === 0) {
//             container.innerHTML = "<p>No results found</p>";
//             return;
//         }

//         const ul = document.createElement("ul");
//         results.forEach(item => {
//             const key = Object.keys(item)[0];
//             const li = document.createElement("li");
//             li.textContent = `${key}: ${item[key]}`;
//             ul.appendChild(li);
//         });
//         container.appendChild(ul);
//     }
// }

// Linear Searching Algorithm 
class Search {
    constructor(data) {
        this.data = data;
    }

    filterData(query) {
        return this.data.filter(item => {
            const keys = Object.keys(item)[0];
            return keys.toLowerCase().includes(query.toLowerCase())
        });
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
            const keys = Object.keys(item)[0];
            const li = document.createElement("li");
            li.textContent = `${keys}: ${item[keys]}`;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
}


// Sample dataset
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

console.log(sampleData);


const searchInstance = new Search(sampleData);

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search...");
    document.body.insertBefore(searchInput, document.querySelector(".sample-data"));

    searchInput.addEventListener("input", () => {
        const query = searchInput.value;
        const results = searchInstance.filterData(query);
        searchInstance.displayResults(results);
    });
});
