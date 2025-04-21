class Data {
    constructor(data) {
        this.data = data
    }


    functionPrimeGenerate(limit = this.data) {
        if(limit < 2) return [];

        let sieve = Array.from({ length: limit + 1 }, () => true)

        sieve[0] = false;
        sieve[1] = false;

        for(let i = 2; i * i <= limit; i++) {
            // console.log(i, sieve[i])
            if(sieve[i]) {
                // console.log(i,"---")

                // Collects all multiplication tables that is not close or equal to the limit.
                for(let j = i*i; j <= limit ; j+=i ) {
                    // console.log(j)
                    sieve[j] = false;
                }
            }
        }

        let primes = []
        for(let i = 0; i < sieve.length; i++) {
            if(sieve[i] == true) {
                primes.push(i)
            }
        }
        
        console.log(primes)
        const maxPrime = Math.max(...primes);

        for (let i = 0; i < 10; i++) {
            // Filter indices of elements that are NOT the largest
            const candidates = primes
                .map((val, idx) => (val !== maxPrime ? idx : -1))
                .filter(idx => idx !== -1);

            if (candidates.length === 0) break; // nothing left to delete

            // Pick a random index from candidates
            const randomIndex = candidates[Math.floor(Math.random() * candidates.length)];

            // Remove that element
            primes.splice(randomIndex, 1);
        }

        console.log(primes)

        return primes

    }


    

}


let cons = new Data(50);

cons.functionPrimeGenerate()
