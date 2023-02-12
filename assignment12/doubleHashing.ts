class HashMap {

    public size: number;
    public table: Array<[[(string | number), (string | number)]]>;


    constructor() {
        this.size = 10;
        this.table = new Array(this.size) as Array<[[(string | number), (string | number)]]>;
    }

    hash1(key: string | number) {
        let summuation = 0;
        let i = 0;

        //converting string to corresponding code set
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


    hash2(key: string | number) {
        let summuation = 0;
        let i = 0;

        //converting string to corresponding code set
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
        return (1 + (summuation % (this.size - 2)));
    }


    //Time Complexity is O(n)
    addItem(key: string | number, value: number | string) {
        let hash1 = this.hash1(key);
        let hash2 = this.hash2(key);

        let i = 0;
        let dynamicIndex:number;

        while (i < this.size) {
            dynamicIndex = ((hash1 + (i * hash2)) % this.size);
            if (!this.table[dynamicIndex]) {
                return (this.table[dynamicIndex] = [[key, value]]);
            }
            i++;
        }
    }

    printTable() {
        console.log(this.table);
    }

    //Time complexity is O(n)
    getItem(key: string | number) {
        let hash1 = this.hash1(key);
        let hash2 = this.hash2(key);

        let i = 0;
        let dynamicIndex:number;

        let counter = 0;

        while (i < this.size) {
            if (counter > this.size) {
                return false;
            }

            dynamicIndex = ((hash1 + (i * hash2)) % this.size);

            if (this.table[dynamicIndex][0][0] == key) {
                return this.table[dynamicIndex][0][1];
            }
            i++;
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