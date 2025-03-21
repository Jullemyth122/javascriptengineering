// Problem how do we identify if the cell is a cage or a open cage in some areas or full areas? 

// Solution 1 create a cell wall calculation by calculating m x m or m x n
// m x n -> wherein it calculates the directions columns and rows

// for example (e.g) ->  
//  1 1  -> 2 x 2 -> m x m not a cage because this is 2 by 2 and it can make a 0 in the middle
//  1 0

//  1 1 1 1
//  1 0 0 1 -> 4 x 3 -> m x n is a cage because it is surrounded by 1
//  1 1 1 1

//  1 1 1
//  1 0 0
//  1 0 0 -> 3 x 3 -> m x m is not a cage because there is open cage 0's 
// 

class Walls {
    constructor() {
        this.cell = [
            1,1,1,1,1,1,
            1,0,0,0,0,1,
            1,0,0,0,0,1,
            1,0,0,0,0,1,
            1,0,0,0,0,1,
            1,0,0,0,0,1,
            1,1,1,1,1,1
        ]  // 5 x 7

        // Cell wall by (m x n)
    }
}

class Borders {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    MbyNCells() {
        const cell = new Walls();

        for (let i = 0; i < this.x; i++) {
            const element = cell[this.x];
            
        }

    }
    
}