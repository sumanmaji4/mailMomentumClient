import axios from 'axios'
import React from 'react'
import MyLineChart from '../MyLineChart'
import ChartToPdf from '../ChartToPdf'

async function getResult(id) {
  const resData = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/result/${id}`
  )
  const data = resData.data
  return data
}

async function page({ params: { id } }) {
  const { ResultPerHour, ResultPerDay, templateName } = await getResult(id)

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
    <div className=' w-full h-full'>
      {PerHourData?.labels?.length ? (
        <ChartToPdf
          templateName={templateName}
          PerHourData={PerHourData}
          PerDayData={PerDayData}
        />
      ) : (
        <h2>No Data Found</h2>
      )}
    </div>
  )
}

export default page
