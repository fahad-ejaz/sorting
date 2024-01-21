import React from 'react'
import BarChart from '../Charts/barchart';

import { useState, useEffect} from "react";
import mergeSort from '../../Utils/merge-sort.js';

export default function MergeSortGraph({unSortedArray, startSorting, isReset, setIsReset, isSorted, setIsSorted}) {
  

  const [sortedArray, setSortedArray] = useState([...unSortedArray])
  const [colors, setColors] = useState(unSortedArray.map(() => "lightblue"));

  
  useEffect(()=>{
    if (startSorting){
        console.log('sorted', sortedArray)
      mergeSort({arr:[...sortedArray], n:sortedArray.length, setSortedArray, setColors, setIsSorted, colors});
      // setIsSorted[1] = true;
      // setColors(() => {return sortedArray.map(() => "lightblue")});
    }
  }, [startSorting])

 useEffect(() => {
  setSortedArray([...unSortedArray])
  setColors(sortedArray.map(()=> "lightblue"));
  setIsReset(false);
 }, [isReset])

  return (
    <div className=""> 
        <BarChart colors={colors} userData={sortedArray}/>
    </div>
  )
}
