import Button from "./Components/Button/button.js";
import { useState, useEffect} from "react";
import Random from "./Utils/random-array.js";
import BubbleSortGraph from "./Components/Algorithms/BubbleSortGraph.js";
import MergeSortGraph from "./Components/Algorithms/MergeSortGraph.js";
import SelectionSortGraph from "./Components/Algorithms/SelectionSortGraph.js";
import QuickSortGraph from "./Components/Algorithms/QuickSortGraph.js";
import Header from "./Components/header.js";
import DropDown from "./Components/dropDown.js";
import useWindowDimensions from "./Utils/useWindowDimensions";

function App() {
  const [startSorting, setStartSorting] = useState(false);
  const [isBSSorted, setIsBSSorted] = useState(true);
  const [isMSSorted, setIsMSSorted] = useState(true);
  const [isSSSorted, setIsSSSorted] = useState(true);
  const [isQSSorted, setIsQSSorted] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [unSortedArray, setUnSortedArray] = useState([8, 10, 50, 2, 10, 33, 6])
  const [algorithm, setAlgorithm] = useState('BubbleSort')
  // const unSortedArray = [1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 9]
  // const unSortedArray = [8, 10, 50, 2, 10, 33, 6]
  const { height, width } = useWindowDimensions();
  let i = 4;

  if (width <= 1400){
    i = 1;
  }

  const setIsSorted = {'BubbleSort': setIsBSSorted, 'MergeSort': setIsMSSorted, 
                        'SelectionSort': setIsSSSorted, 'QuickSort': setIsQSSorted}
  const handleClick = () => {
    setStartSorting(true);

    if (i === 1){
      setIsSorted[algorithm](false)
    }
    else {
      setIsBSSorted(false)
      setIsMSSorted(false)
      setIsQSSorted(false)
      setIsSSSorted(false)
    }
    
  }

  const handleReset = () => {
    // if(allSorted){
      const length = Math.random() * 100
      const randomArray = Random({length: length});
      setUnSortedArray(randomArray);
      setIsReset(true);
    // }
  }

  const allSorted = (isBSSorted && isMSSorted && isQSSorted && isSSSorted)
  useEffect(() => {
    if (allSorted){
      setStartSorting(false)
    }
  }, [isBSSorted, isMSSorted, isQSSorted, isSSSorted])


  const MSGraph = <div className="">
    <div className="text-center">
      Merge Sort
    </div>
    <MergeSortGraph unSortedArray={unSortedArray} 
          isReset={isReset} 
          setIsReset={setIsReset}
          startSorting={startSorting}
          setIsSorted={setIsMSSorted}
          isSorted={isMSSorted}
          setstartSorting={setStartSorting}
        />
    </div>
  const BSGraph = <div>
    <div className="text-center">
      Bubble Sort
    </div>
    <BubbleSortGraph unSortedArray={unSortedArray} 
          isReset={isReset} 
          setIsReset={setIsReset}
          startSorting={startSorting}
          setIsSorted={setIsBSSorted}
          isSorted={isBSSorted}
          setstartSorting={setStartSorting}
        />
    </div>

const SSGraph = <div>
  <div className="text-center">
      Selection Sort
  </div>
  <SelectionSortGraph unSortedArray={unSortedArray} 
        isReset={isReset} 
        setIsReset={setIsReset}
        startSorting={startSorting}
        setIsSorted={setIsSSSorted}
        isSorted={isSSSorted}
        setstartSorting={setStartSorting}
      />
  </div>

const QSGraph = <div>
  <div className="text-center">
      Quick Sort
  </div>
  <QuickSortGraph unSortedArray={unSortedArray} 
        isReset={isReset} 
        setIsReset={setIsReset}
        startSorting={startSorting}
        setIsSorted={setIsQSSorted}
        isSorted={isQSSorted}
        setstartSorting={setStartSorting}
      />
  </div>


 
  let render;

  if (i === 4){
    render = <div >
      {/* <div className="flex flex-row justify-center">
        <div className="m-1">
          <Button disabled={!allSorted} handleClick={handleClick} text={"Sort"} />
        </div>
        <div className="m-1">
          <Button disabled={!allSorted} handleClick={handleReset} text={"Reset"} />
        </div>
      </div> */}
      <div className="grid grid-cols-2 m-10 p-2 justify-center gap-6">
        {BSGraph}
        {MSGraph}
        {SSGraph}
        {QSGraph}
      </div> 
    </div>
  }

  let graphs={'BubbleSort': BSGraph, 'MergeSort': MSGraph,'SelectionSort': SSGraph,'QuickSort': QSGraph,}

  let zIndex = '';
  if (!allSorted){
    zIndex = '-z-30'
  }
  if (i===1){
    render = <div className={`flex flex-col justify-center align-center mt-3 p-5 m-2 relative h-full ${zIndex}`}>
      <div className='flex justify-center mb-4'>
        <DropDown setAlgorithm={setAlgorithm}/>
      </div>
      <div className="flex justify-center w-full h-full">{graphs[algorithm]}</div>
    </div>
  }

  const disabled = !allSorted;
  
  return (
    <div className="App w-full h-screen">
      {/* <Navbar /> */}
      <Header />
      <div className="flex justify-center mt-3"> 
        <button
          disabled={disabled}
          className="text-xl transition custom-button
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleClick}>
          Sort
        </button>
        <button
          disabled={disabled}
          className="text-xl transition custom-button
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleReset}>
          Reset
        </button>
      </div>
      {render}
      
    </div>
  );
}

export default App;
