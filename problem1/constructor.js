class Search {
    constructor(data) {
        this.data = data;
    }

    filterData(query) {
        console.time("Linear Search Time");
        // const time = console.time()
        const results = this.data.filter(item => {
            const keys = Object.keys(item)[0];
            const keys1 = Object.keys(item)[1];
            const keys2 = Object.keys(item)[2];
            return (keys.toLowerCase().includes(query.toLowerCase()) || 
                keys1.toLowerCase().includes(query.toLowerCase()) ||
                keys2.toLowerCase().includes(query.toLowerCase())           
            )
        });
        console.log(results)
        console.timeEnd("Linear Search Time");
        // time = console.timeEnd()
        return results
    }

    displayResults(results) {
        const container = document.querySelector(".sample-data");
        container.innerHTML = ""; // Clear previous results
        
        if (results.length === 0) {
            container.innerHTML = "<p>No results found</p>";
            return;
        }

        const ul = document.createElement("ul");
        // console.log(results)
        results.forEach(item => {
            // console.log(item)
            const keys = Object.keys(item);
            console.log(keys)
            console.log("-----------")
            const li = document.createElement("li");
            let samp = ''
            keys.forEach((keyed) => {
                console.log( keyed ,item[keyed])
                samp += `${keyed}:${item[keyed]}` + `,`
            })
            // console.log(samp)
            li.textContent = samp;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
}

// function getRandomWord(length) {
//     const characters = "abcdefghijklmnopqrstuvwxyz";
//     return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
// }

// // Generate 1000 random key-value pairs
// const sampleData = Array.from({ length: 1000 }, () => {
//     const randomWord = getRandomWord(Math.floor(Math.random() * 10) + 3); // Random word (3-12 letters)
//     const randomNumber = Math.floor(Math.random() * 100); // Random number (0-99)
//     return { [randomWord]: randomNumber };
// });

// console.log(sampleData);

const sampleData = [
    { "Fruits": 3, "Avocado": 1, "Apple": 2 },
    { "Vegetable": 3, "Papaya": 1, "Malunggay": 2 },
]



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
