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
        //Time Complexity is O(n)
        if (typeof key == 'string') {
            while (i < key.length) {
                summuation += key.charCodeAt(i);
                i++;
            }
        } else {

            let str = key.toString();

            while (i < str.length) {
                summuation += str.charCodeAt(i);
                i++;
            }

        }



        return summuation % this.size;
    }

    //Here we add item to the hashtable 
    //Time Complexity is O(1)
    addItem(key: string | number, value: number | string) {

        //This is the has function
        let hash: number = this.hash(key);



    /*We check whether the array is empty or not, and if it is, we assign the key and value otherwise, 
    we appen to the same index, because this is a nested array.

    eg: 
     if 15 and 25 have the same index, it will be
      [

        5:[[15,data],[25,data]]  
 
    ]
        */

        if (!this.table[hash]) {
            this.table[hash] = [[key, value]];
        } else {
            this.table[hash].push([key, value]);
        }
    }

    printTable() {
        console.log(this.table);
    }

    /*

We iterate over the hashtable here, so the time complexity will be O(n)
    
    */

      //Time complexity is O(n)
    getItem(key: string | number) {
        let hash = this.hash(key);
        let result;
        this.table[hash].map((elem) => {
            if (elem[0] === key) {
                result = elem[1];
            }
        });
        return result;
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
hashmap.printTable()

const result1 = hashmap.getItem("march 6");
console.log(result1);

const result2 = hashmap.getItem("march 17");
console.log(result2);
export { }

// Here there is no collision, but the space is larage
//Space complexity is O(n)