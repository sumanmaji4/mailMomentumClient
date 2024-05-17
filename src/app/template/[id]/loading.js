import React from 'react'

function loading() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-center items-center p-16 gap-4'>
      <h1 className=' font-extrabold text-6xl text-slate-300'>loading...</h1>
      <p className=' font-bold text-2xl text-slate-300'>please wait</p>
    </div>
  )
}

export default loading
