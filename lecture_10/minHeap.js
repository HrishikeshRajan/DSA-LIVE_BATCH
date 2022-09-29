
function swap(nthIndex,parentIndex,heap){
    
    let temp = heap[parentIndex];
    heap[parentIndex] = heap[nthIndex];
    heap[nthIndex] = temp;
    return heap; 
}

function buildHeap(heap,arr,num){
    heap = arr;
    let n = num;
    let height = Math.floor((arr.length-1)/2)
    if(n<0){
    return heap
    }
    for (let i = 0; i < height; i++) {
    let parent = (Math.round(n/2))-1
    if(parent < 0){
        break;
    }
//here comes
    if(heap[n] < heap[parent]){
          console.log('swap')
        swap(n,parent,heap)
       }
       n = parent;
   }
return buildHeap(heap,arr,--num);
}

function minHeap(arr){
    let heap=[];      
return  buildHeap(heap,arr,arr.length-1);
}

const arr = [1, 3, 7, 9, 12, 10, 8, 16, 18, 22, 27]
const result = minHeap(arr);
console.log(result);

//To see the comparison flowchart paste below code in Line no : 22
// console.log('childIndex: ',n,' value => ',heap[n],', ',' parentIndex: ',parent, ' value => ', heap[parent])
