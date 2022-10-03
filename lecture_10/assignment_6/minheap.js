//Swaps with smallest child and it's parent
function swap(heap,index,smallest){
    let temp = heap[index];
    heap[index] = heap[smallest];
    heap[smallest] = temp;
    return;  
}
//To calculate child indexes of left and right child
function calculateChildIndexs(i){
    const left = Math.floor((2*i + 1));
    const right = Math.floor((2*i + 2));
    return([left,right])
}
// Heapify method
function HEAPIFY_MIN_HEAP(heap,index){

    let [leftChildIndex ,rightChildIndex] = calculateChildIndexs(index);
    let smallest;

    if(leftChildIndex < heap.length && heap[leftChildIndex] < heap[index]){
       smallest =  leftChildIndex;
    }else{
        smallest = index
    }
    if(rightChildIndex < heap.length && heap[rightChildIndex] < heap[smallest]){
        smallest =  rightChildIndex;
    }

    if(smallest != index){
        swap(heap,index,smallest)
        HEAPIFY_MIN_HEAP(heap,smallest)
    }
    if( index < 1){
        return heap;
    }
  
}


function BUILD_MIN_HEAP(arr){

    //Calculate the index of last parent
    let parent = Math.floor((arr.length/2)-1);

    //Here we assign i = parent 
    //Because our heapification process starts from the last parent
    //Then decrement by 1 till the root node;

    let i = parent;
    while(i>=0){
        HEAPIFY_MIN_HEAP(arr,i)
        i--;
    }
return result;
}


const arr =  [1, 3, 7, 9, 12, 10, 8, 16, 18, 22,27];
const result =  BUILD_MIN_HEAP(arr)
console.log(result);

