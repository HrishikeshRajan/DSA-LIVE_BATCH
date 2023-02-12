class HashMap {

    public size: number;
    public table: [(number | string)];


    constructor() {
        this.size = 20;
        this.table = new Array(this.size) as [(string | number)];
    }


    /*
        Here the Time complexity will be  O(n), since the hash funcation takes a loop of n times
        Total time complexity of the function = O(1) + O(n) =O(n)

    */
    addItem(key: string | string, value: number | string) {

        let summuation = 0;
        let i = 0;

        while (i < key.length) {
            summuation += key.charCodeAt(i);
            i++;
        }

        let squared = "";
        squared += summuation * summuation;

        let arr = squared.split("");

        const mid = 0 + Math.floor((arr.length - 0) / 2);

        let prev = parseInt(arr[mid - 1]);
        let curr = parseInt(arr[mid]);
        let next = parseInt(arr[mid + 1]);

        let index = Number(prev + curr + next);
        return this.table[index] = value;
    }

    printTable() {
        let counter = 0;
        while (counter < this.size) {
            console.log(this.table[counter] ? this.table[counter] : "");
            counter++;
        }
    }

    /*
    Here the Time complexity will be  O(n), since the hash funcation takes a loop of n times
    Total time complexity of the function = O(1) + O(n) =O(n)

*/
    getItem(key: string) {
        let summuation = 0;
        let i = 0;

        while (i < key.length) {
            summuation += key.charCodeAt(i);
            i++;
        }

        let squared = "";
        squared += summuation * summuation;

        let arr = squared.split("");

        const mid = 0 + Math.floor((arr.length - 0) / 2);
        let prev = parseInt(arr[mid - 1]);
        let curr = parseInt(arr[mid]);
        let next = parseInt(arr[mid + 1]);



        let indexs = Number(prev + curr + next);
        return this.table[indexs];
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

const result1 = hashmap.getItem("march 6");
console.log(result1);

const result2 = hashmap.getItem("march 17");
console.log(result2);
export { }


//Time Complexity = adding an item = O (n)
//Collision is there