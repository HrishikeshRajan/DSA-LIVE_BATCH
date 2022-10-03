function MIN_MIN_HEAP(heap){
    let temp = heap[0];
    heap[0] = heap.pop();
    return ([temp,heap]);
}

function calculatePoints(arr){
    let point_1 = arr[0];
    let point_2 = arr[1];
    return ((point_1**2) + (point_2**2))
}

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

function HEAPIFY_MIN_HEAP(heap,index){

    let [leftChildIndex ,rightChildIndex] = calculateChildIndexs(index);
    let smallest;


    if(leftChildIndex < heap.length && calculatePoints(heap[leftChildIndex]) < calculatePoints(heap[index])){
       smallest =  leftChildIndex;
    }else{
        smallest = index
    }
    if(rightChildIndex < heap.length &&calculatePoints(heap[rightChildIndex]) < calculatePoints(heap[smallest])){
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


function BUILD_MIN_HEAP(arr,k){

    //Calculate the index of last parent
    let parent = Math.floor((arr.length/2)-1);
    let kthCoordinates = [] 
    
    //Here we assign i = parent 
    //Because our heapification process starts from the last parent
    //Then decrement by 1 till the root node;

    let i = parent;
    while(i>=0){
        HEAPIFY_MIN_HEAP(arr,i)
        i--;
    }

    //Here we delete k times from the head node
    let m = 0;
    while(m<k){
      let  [head,heap] = MIN_MIN_HEAP(arr);
      HEAPIFY_MIN_HEAP(heap,0)
      kthCoordinates.push(head)
        m++;
    }
return kthCoordinates;
}

const arr = [[1,3],[-2,2]]
const result =  BUILD_MIN_HEAP(arr,1)
console.log(result);

