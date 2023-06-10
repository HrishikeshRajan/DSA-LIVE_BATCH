/**
   Question
   
   Recover Binary Search Tree
   You are given the root of a binary search tree (BST), where the values of exactly two nodes of the
   tree were swapped by mistake. Recover the tree without changing its structure.

  Examples:
  Input: root = [1,3, null, null,2]
  Output: [3,1, null, null,2]
  Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3
  makes the BST valid.

 */






//Class Node
class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    val: number;

    constructor(value: number) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}


//Function to create each node
const createTreeNode = (value: number) => {
    return new TreeNode(value);
}


//A function that returns a array of inorder items of given BST
const inorder = (root: TreeNode | null, result: Array<number>) => {
    if (!root) return;

    inorder(root?.left, result);
    result.push(root.val);
    inorder(root?.right, result)
    return result;
}

//A function to sort the array based on numerical value
const sort = (arr: Array<number>): Array<number> => {
    return arr.sort((a, b) => a - b);
}


let index = 0;
const reArrangeBSTtree = (root: TreeNode | null, sortedArray: Array<number>) => {
    //Edge case to handle, if no root is provided return null
    if (!root) return null;
    //Moving to the left side unitil it reaches the leaf node
    reArrangeBSTtree(root.left, sortedArray);
    //Here we assign the leaf node with current element present at corresponding index value of sorted array;
    root.val = sortedArray[index];
    //Now increment the counter
    ++index;
    //Here we move to right side of the BST 
    reArrangeBSTtree(root.right, sortedArray);
}


//Driver code
const root = createTreeNode(1);
root.left = createTreeNode(3);
root.left.right = createTreeNode(2);

//First creating a array of items in a BST in inorder form 
let result = inorder(root, []);
//Creating another array with same elements but in a sorted form
const sortedArray = sort(result as Array<number>);

//Swapping function
reArrangeBSTtree(root, sortedArray);

//Function to print the inorder traversal of given BST
let newInorder = inorder(root, []);
console.log(newInorder);


/**
    TIME COMPLEXITY 

    *   The time complexity of inorder is O(n)
    *   The time complexity of reArrangeBSTtree is also O(n), since it also uses the working principle of inorder
        traversal
    *   Time complexity of sort = O(N Log(n)), here we use inbuilt sort method

    Total Time Complexity = O(N * Log(N))

    SPACE COMPLEXITY
    
    * The space complexity is O(n), since here we created th sorted array 

*/

export { };