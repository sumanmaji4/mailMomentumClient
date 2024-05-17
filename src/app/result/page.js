import axios from 'axios'
import React from 'react'
// import MyLineChart from './MyLineChart'
import ChartToPdf from './ChartToPdf'

async function getResult() {
  const resData = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/result`
  )
  const data = resData.data
  return data
}

async function page() {
  const { ResultPerHour, ResultPerDay, templateName } = await getResult()

  const PerHourData = {
    labels: [...Object.keys(ResultPerHour)],
    datasets: [
      {
        label: 'Number of clicks in each hour',
        data: [...Object.values(ResultPerHour)],
        borderColor: 'rgb(39, 171, 101)',
      },
    ],
  }

  const PerDayData = {
    labels: [...Object.keys(ResultPerDay)],
    datasets: [
      {
        label: 'Number of clicks in each day',
        data: [...Object.values(ResultPerDay)],
        borderColor: 'rgb(39, 171, 72)',
      },
    ],
  }

  return (
    <div className=' w-full h-full flex flex-col justify-center items-center'>
      {/* <h2>{templateName}</h2>
      <p className=' text-xs'>
        Hour 11 means from 11:00AM to 11:59AM, same for every hour
      </p>
      <div>
        <MyLineChart data={PerHourData} />
      </div>
      <div>
        <MyLineChart data={PerDayData} />
      </div> */}

      {PerHourData?.labels?.length ? (
        <ChartToPdf
          templateName={templateName}
          PerHourData={PerHourData}
          PerDayData={PerDayData}
        />
      ) : (
        <h2 className='mt-20 font-bold text-5xl text-slate-300'>
          No Data Found
        </h2>
      )}
    </div>
  )
}

export default page
