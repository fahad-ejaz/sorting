import React, { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';


export default function BarChart({userData, colors}) {
  const [chartData, setChartData] = useState({
    labels: userData.map((d,i) => i),
    datasets: [{
      label: "Whatever",
      data: userData
    }],
    options: {
      plugins: {
        legend: {
            display: false // This hides all text in the legend and also the labels.
        }
    }
    }
  })

  useEffect(() => {
    setChartData({
      labels: userData.map((d, i) => i),
      datasets: [{
        label: "",
        data: userData,
        backgroundColor: colors,
      }],
      options: {
        plugins: {
          legend: {
              display: false // This hides all text in the legend and also the labels.
          }
        }
      }
    });
  }, [userData, colors]);
  
  return (
    <Bar height="250" width="250" options={{
      maintainAspectRatio : false,
      responsive: true
    }} data={chartData}/>
  )
}

