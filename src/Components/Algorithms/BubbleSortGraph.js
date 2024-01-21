import React from 'react'
import BarChart from '../Charts/barchart';
import bubbleSort from '../../Utils/bubble-sort.js';

import { useState, useEffect} from "react";

export default function BubbleSortGraph({unSortedArray, startSorting, isReset, setIsReset, isSorted, setIsSorted}) {
  
  const [barIndex, setActiveBarIndex] = useState(null)
  const [sortedArray, setSortedArray] = useState([...unSortedArray])
  const [colors, setColors] = useState(unSortedArray.map(() => "lightblue"));

  
  useEffect(()=>{
    if (startSorting){
      bubbleSort({arr:sortedArray, setSortedArray, setColors, setIsSorted});
    }
  }, [startSorting])

 useEffect(() => {
  setSortedArray([...unSortedArray])
  setColors(sortedArray.map(()=> "lightblue"));
  setIsReset(false);
 }, [isReset])

  return (
    <div className="" > 
        <BarChart colors={colors} userData={sortedArray}/>
    </div>
  )
}
