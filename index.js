
class Combination {

    constructor(input, target) {
        this.input = input || []; /* store for the input Array */
        this.target = target || 0; /* store for the target value */
        this.combinations = []; /* store for the generated combinations based on input */
        this.merged = []; /* store for the merged result of the combinations */
    }


    /* This method used to merge the generated combinctions */
    merge = () => {
        let merged = []

        this.combinations.forEach((element) => {
            merged = [...merged, ...element]
        });

        this.merged = merged;

        console.log(`After merging the combinations =>> [ ${this.merged.join(" , ")} ]`);
        console.log(' ');
    }

    /* This method used to sort the merged result */
    sort = () => {

        this.merged.sort((elm1, elm2) => elm1 - elm2)

        console.log(`Arter sorting the result =>> [ ${this.merged.join(" , ")} ]`);
        console.log(' ');
    }


    /*
    The following methods are used to calculate
    all the possible Combinations of two digits that sum upto a target value 
    */

    /*   ***** Brute Force Solution [ O(n^2) ] ******   */
    findCombinationsBruteForce = () => {
        const combinations = [];

        /* Iterating whole array to find every possible combinations for each index */
        for (let i = 0; i < this.input.length; i++) {
            const value1 = this.input[i]
            for (let j = i + 1; j < this.input.length; j++) {
                const value2 = this.input[j];
                if (Math.abs(value1 + value2) === this.target) {
                    combinations.push([value1, value2])
                }
            }
        }

        /* Removing duplicate combinations */
        const ans = combinations.filter((elm, index) => {

            let valid = true;

            for (let i = index + 1; i < combinations.length; i++) {
                const item = combinations[i];
                if ((elm[0] === item[0]) && (elm[1] === item[1])) {
                    valid = false;
                    break;
                }
            }

            return valid;
        })

        this.combinations = ans;

        console.log(' ');
        console.log(`Combinations for the target value ${this.target} using Brute Force =>>`, ans);
        console.log(' ');
    }

    /*   ***** Inbuilt Set Class based Solution [ O(n) ] ******   */
    findCombinationsSetClass = () => {
        const combinations = [];

        const set = new Set();

        for (let i = 0; i < this.input.length; i++) {

            const remains = Math.abs(this.target - this.input[i]);

            if (set.has(remains)) {
                combinations.push([remains, this.input[i]]);
            }

            set.add(Math.abs(this.input[i]));
        }

        console.log(' ');
        console.log(`Combinations for the target value ${this.target} using Set Class =>>`, combinations);
        console.log(' ');
    }



    /*
    The following methods are used to calculate
    all the possible Combinations of multiple digits that sum upto a target value 
    */



}


/* Inputs */
const input = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;


/* 

--- output for 4 ---
combinations =>> [ [1,3],[2,2],[-4,8],[-6,2] ];
merged and sorted =>> [ -6,-4,1,2,2,2,3,8];

*/


/* Creating an instance on Combination Class */
const result1 = new Combination(input, target);

/* Generating combinations using Brute Force Method */
result1.findCombinationsBruteForce();

/* Generating combinations using Inbuilt Set Class */
result1.findCombinationsSetClass();

/* Merging the combinations */
result1.merge();

/* Sorting the merged results */
result1.sort();


/*
--- output for 8 ---
combinations =>>  [ [ 1,3,2,2], [8,-4,2,2],....,[n,n,n,n] ]

*/

