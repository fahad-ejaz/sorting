export default function bubbleSort({arr, setSortedArray, setColors, setIsSorted}) {
    var i, j;
    var len = arr.length;
 
    var isSwapped = false;
    const sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
    }
      
    // const time = 2500/len;
 
   const doSomething = async() => {
        for (i = 0; i < len; i++) {
            isSwapped = false;    
            for (j = 0; j < (len - i - 1); j++) {
                if (arr[j] > arr[j + 1]) {
                    console.log("Timeout")
                    var temp = arr[j]
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwapped = true;
                    setSortedArray(() => {return [...arr]})
                    setColors(() => {
                        const colors = arr.map(() => "lightblue");
                        colors[j] = "purple";
                        colors[j+1] = "purple";
                        colors[len - i] = "green";
                        return colors;
                    })
                    await sleep(50);
                }
            }
    
            // IF no two elements were swapped
            // by inner loop, then break 
            if (!isSwapped) {
                break;
            }
            
        }
        setIsSorted(true)
        setColors(() => {return arr.map(() => "lightblue")});
   }

    doSomething()
}
