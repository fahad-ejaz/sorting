
  
export default async function selectionSort({arr:inputArr, setSortedArray, setColors, setIsSorted}) 
{ 
        let n = inputArr.length;
            
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                setColors(() => {
                    const newColors = inputArr.map(() => "lightblue");
                        newColors[i - 1] = "green";
                        newColors[j] = "purple";
                        newColors[min] = "purple";
                        return newColors;
                    })
                await sleep(50)
                if(inputArr[j] < inputArr[min]) {
                    min=j; 
                }
             }
             
             if (min != i) {
                 // Swapping the elements
               
                 let tmp = inputArr[i]; 
                 inputArr[i] = inputArr[min];
                 inputArr[min] = tmp;      
                 
                
                setSortedArray([...inputArr])
                setColors(() => {
                    const newColors = inputArr.map(() => "lightblue");
                        // newColors[i] = "purple";
                        newColors[i] = "green";
                        return newColors;
                    })
                await sleep(500)
            }
            // setColors(() => {
            //     const newColors = inputArr.map(() => "lightblue");
            //         newColors[min] = "green";
            //         return newColors;
            // })
            // await sleep(200)
        }
        setColors(() => {
            const newColors = inputArr.map(() => "lightblue");
                return newColors;
        })
        setIsSorted(true)
        return inputArr;
    }

function sleep(time){
    let newPromise = new Promise((resolve) => {
      setTimeout(()=>{resolve('resolved')}, [time])
    })
    return newPromise;
  }
  

  
 
 