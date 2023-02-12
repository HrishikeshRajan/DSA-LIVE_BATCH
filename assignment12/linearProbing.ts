class HashMap {

    public size: number;
    public table: Array<[[(string | number), (string | number)]]>;


    constructor() {
        this.size = 10;
        this.table = new Array(this.size) as Array<[[(string | number), (string | number)]]>;
    }

    hash(key: string | number) {
        let summuation = 0;
        let i = 0;

        //converting string to corresponding code set
        //Time complexity is O(n)
        if (typeof key == 'string') {
            while (i < key.length) {
                summuation += key.charCodeAt(i);
                i++;
            }
        } else {

            let str = key.toString();

            //o(n) times
            while (i < str.length) {
                summuation += str.charCodeAt(i);
                i++;
            }

        }
        return summuation % this.size;
    }

    //Here we add item to the hashtable
    //Time complexity is O(n)
    addItem(key: string | number, value: number | string) {
        let hash = this.hash(key);

        let i = 0;
        let dynamicIndex: number;

        /*

             In this loop, we deal with collisions.

        * First, we compute the hash and use it as an index to store the key-value pair. 
        * Next, before assigning the key-value pair to the index, we check to see if any key value pair already exists.
        * If it exists, we calculate a new index by incrementing the i and repeat the process.
        
        */

        while (i < this.size) {
            dynamicIndex = (hash + i) % this.size;
            if (!this.table[dynamicIndex]) {
                return (this.table[dynamicIndex] = [[key, value]]);
            }
            i++;
        }
    }

    printTable() {
        console.log(this.table);
    }

    //Time Complexity is O(n)
    getItem(key: string | number) {
        let hash = this.hash(key);

        let i = 0;
        let dynamicIndex: number;

        let counter = 0;

        while (i < this.size) {
            if (counter > this.size) {
                return false;
            }

            dynamicIndex = (hash + i) % this.size;

            /* Because these are all nested arrays and we already know the key, pair only contains two elements,
             we could write the harcoded index directly. */

            if (this.table[dynamicIndex][0][0] == key) {
                return this.table[dynamicIndex][0][1];
            }
            i++;
            counter++;
        }


        return -1;
    }
}

const hashmap = new HashMap();
hashmap.addItem("march 1", 10);
hashmap.addItem("march 2", 20);
hashmap.addItem("march 3", 30);
hashmap.addItem("march 4", 40);
hashmap.addItem("march 5", 50);
hashmap.addItem("march 6", 60);
hashmap.addItem("march 7", 70);
hashmap.addItem("march 8", 80);
hashmap.addItem("march 9", 90);
hashmap.addItem("march 10", 100);
hashmap.addItem("march 17", 110);
hashmap.addItem("march 20", 120);
hashmap.addItem("march 22", 130);
hashmap.printTable();
console.log(hashmap.getItem("march 6"));
console.log(hashmap.getItem("march 17"));


export { }