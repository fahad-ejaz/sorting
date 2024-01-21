// const swap = (arr, left, right) =>  {
//     const temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp;
//   }
  
//   const partitionHigh = async (arr, low, high, setColors, setSortedArray) => {
//     //Pick the first element as pivot
//     let pivot = arr[high];
//     let i = low;
    
//     //Partition the array into two parts using the pivot
//     for(let j = low; j < high; j++){
//         // setSortedArray([...arr])
//         setColors(() => {
//             const newColors = arr.map(() => "lightblue");
//                 // newColors[i+1] = "purple";
//                 newColors[i] = "purple";
//                 newColors[j] = "purple";
//                 return newColors;
//         })
//         await sleep(200)
//       if(arr[j] <= pivot){      
//         swap(arr, i, j);
//         setSortedArray([...arr])
//         i++;
//       }
//     }
    
//     swap(arr, i, high);
    
    
//     //Return the pivot index
//     return i;
//   }
  
//   export default async function quickSort ({arr, l, h, setSortedArray, setColors, setIsSorted}) {
//     //Stack for storing start and end index
//     let stack = [];
    
//     //Get the start and end index
//     let start = 0;
//     let end = arr.length - 1;
    
//     //Push start and end index in the stack
//     stack.push({x: start, y: end});
    
//     //Iterate the stack
//     while(stack.length){
//       //Get the start and end from the stack
//       const { x, y } = stack.shift();
      
//       //Partition the array along the pivot
//       const PI = partitionHigh(arr, x, y, setColors, setSortedArray);
//       setSortedArray([...arr])
      
//       //Push sub array with less elements than pivot into the stack
//       if(PI - 1 > x){
//         stack.push({x: x, y: PI - 1});
//       }
      
//       //Push sub array with greater elements than pivot into the stack
//       if(PI + 1 < y){
//         stack.push({x: PI + 1, y: y});
//       }
//     }
//   }







async function partition(arr, low, high, setSortedArray, setColors) 
    { 
        let temp; 
        let pivot = arr[high]; 
   
        // index of smaller element 
        let i = (low - 1); 
        for (let j = low; j <= high - 1; j++) { 
            // If current element is smaller 
            // than or equal to pivot 
            setColors(() => {
                const newColors = arr.map(() => "lightblue");
                    newColors[high] = "red";
                    // newColors[low] = 'red'
                    newColors[i] = "purple";
                    newColors[j] = "purple";
                    return newColors;
            })
            await sleep(200)
            if (arr[j] <= pivot) { 
                i++; 
   
                // swap arr[i] and arr[j] 
                temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
                setSortedArray([...arr])
                
            } 
           
        } 
   
        // swap arr[i+1] and arr[high] 
        // (or pivot) 
   
        temp = arr[i + 1]; 
        arr[i + 1] = arr[high]; 
        arr[high] = temp; 

        setSortedArray([...arr])
        setColors(() => {
            const newColors = arr.map(() => "lightblue");
                // newColors[i+1] = "purple";
                newColors[i+1] = "green";
                return newColors;
        })
        await sleep(200)
   
        return i + 1; 
    } 
   
    /* A[] --> Array to be sorted, 
    l --> Starting index, 
    h --> Ending index */
   export default async function quickSort({arr, l, h, setSortedArray, setColors, setIsSorted}) 
    { 
        // Create an auxiliary stack 
        let stack = new Array(h - l + 1); 
        stack.fill(0); 
   
        // initialize top of stack 
        let top = -1; 
   
        // push initial values of l and h to 
        // stack 
        stack[++top] = l; 
        stack[++top] = h; 
   
        // Keep popping from stack while 
        // is not empty 
        while (top >= 0) { 
            // Pop h and l 
            h = stack[top--]; 
            l = stack[top--]; 
   
            // Set pivot element at its 
            // correct position in 
            // sorted array 
            let p = await partition(arr, l, h, setSortedArray, setColors); 
            setColors(() => {
                const newColors = arr.map(() => "lightblue");
                    return newColors;
            })
   
            // If there are elements on 
            // left side of pivot, then 
            // push left side to stack 
            if (p - 1 > l) { 
                stack[++top] = l; 
                stack[++top] = p - 1; 
            } 
   
            // If there are elements on 
            // right side of pivot, then 
            // push right side to stack 
            if (p + 1 < h) { 
                stack[++top] = p + 1; 
                stack[++top] = h; 
            } 
        } 
        setIsSorted(true)
    } 
   

    function sleep(time){
        let newPromise = new Promise((resolve) => {
          setTimeout(()=>{resolve('resolved')}, [time])
        })
        return newPromise;
      }
      
   