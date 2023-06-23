
/**
 * @description A clas for creating the Node shape
 */
class Node {
    left: Node | null;
    right: Node | null;
    val: number;

    constructor(value: number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 
 * @param value 
 * @returns Node
 * @description This function is just an abraction for creating the node process
 */
const createNode = (value: number) => {
    return new Node(value);
}



const root = createNode(4);
root.left = createNode(2);
root.left.left = createNode(1);
root.left.right = createNode(3);

root.right = createNode(7);
root.right.left = createNode(6);
root.right.right = createNode(9);



/**
 * 
 * @param root 
 * @returns root or null
 */
const invert_binary_tree = (root: Node | null) => {
    if (!root) return null;
    
    //Here we copy the left node to temp variable to prevent the data loss
    let temp = root.left;
    //Over writing the left node with right node 
    root.left = root.right;
    //Over writing the right node with the left node
    root.right = temp;

    //This recursive call helps to apply this process to all the node present in the left and right sub tree
    invert_binary_tree(root.left);
    invert_binary_tree(root.right);
    return root;
}


const result = invert_binary_tree(root);
console.log(result);

/**
 * Time Complexity = O(n), where h is height of the tree
 * Space complexity = O(n), n is stack space
 * 
 * 
 */


export {}