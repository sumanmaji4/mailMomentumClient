'use client'
import React, { useRef } from 'react'
import MyLineChart from './MyLineChart'
import { useReactToPrint } from 'react-to-print'

function ChartToPdf({ templateName, PerHourData, PerDayData }) {
  const pdfRef = useRef()
  const generatePdf = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: `${templateName}.pdf`,
  })
  return (
    <div className=' w-full h-full flex flex-col items-center gap-10'>
      <div
        className=' w-full h-full flex flex-col items-center gap-8 py-10'
        ref={pdfRef}
      >
        <h2>{templateName}</h2>
        <p className=' text-xs'>
          Hour 11 means from 11:00AM to 11:59AM, same for every hour
        </p>
        <div>
          <MyLineChart data={PerHourData} />
        </div>
        <div>
          <MyLineChart data={PerDayData} />
        </div>
      </div>
      <button
        className='p-1 bg-green-400 rounded px-2 hover:bg-green-300 font-semibold'
        onClick={generatePdf}
      >
        Save as PDF
      </button>
    </div>
  )
}

export default ChartToPdf
