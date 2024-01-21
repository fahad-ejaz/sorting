import React from 'react'
import BarChart from '../Charts/barchart';

import { useState, useEffect} from "react";
import quickSort from '../../Utils/quick-sort';

export default function QuickSortGraph({unSortedArray, startSorting, isReset, setIsReset, isSorted, setIsSorted}) {
  

  const [sortedArray, setSortedArray] = useState([...unSortedArray])
  const [colors, setColors] = useState(unSortedArray.map(() => "lightblue"));

  
  useEffect(()=>{
    if (startSorting){
        console.log('sorted', sortedArray)
      quickSort({arr:[...sortedArray], l:0, h: sortedArray.length, setSortedArray, setColors, setIsSorted, colors});
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
