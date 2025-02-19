class Search {
    constructor(data) {
        this.data = data;
        
    }


    filterData(query) {
        
        // 
        const results = this.data.filter(item => {
            return Object.keys(item).some(key => {
                return key.toLowerCase().includes(query.toLowerCase())
            })

        })

        console.log(results)
        return results 
    }

    displayResults(results) {
        const container = document.querySelector('.sample-data');
        container.innerHTML = "";

        if (results.length === 0) {
            container.innerHTML = "<p>No results found</p>";
            return;
        }

        const ul = document.createElement("ul");

        results.forEach(item => {
            const li = document.createElement("li");
            let samp = '';

            Object.keys(item).forEach(key => {
                samp += `${key}:${item[key]}, `;
            });

            // Remove trailing comma and space
            li.textContent = samp.slice(0, -2);
            ul.appendChild(li);
        });

        container.appendChild(ul);
    }   

}


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
