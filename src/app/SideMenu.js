'use client'
import MailTemplates from '@/components/MailTemplates'
import Link from 'next/link'
import React, { useState } from 'react'

function SideMenu() {
  const [showTemplate, setShowTemplate] = useState(false)
  const [showResult, setShowResult] = useState(false)

  return (
    <div className=' w-80 border-2 h-screen overflow-y-auto flex flex-col font-bold text-lg text-slate-700'>
      <Link href='/'>
        <h2 className='border-b-2 cursor-pointer hover:bg-green-100 p-4'>
          HOME
        </h2>
      </Link>
      <div className=' border-b-2'>
        <h2
          className=' cursor-pointer hover:bg-green-100 p-4'
          onClick={() => setShowTemplate((prev) => !prev)}
        >
          Templates
        </h2>
        {showTemplate && (
          <>
            <Link href='/template'>
              <h4 className='py-1 px-4 font-normal text-sm hover:bg-green-100 cursor-pointer'>
                + Add New
              </h4>
            </Link>

            <MailTemplates />
          </>
        )}
      </div>
      <div className=' border-b-2'>
        <Link href='/sendmail'>
          <h2 className=' cursor-pointer hover:bg-green-100 p-4'>Send Email</h2>
        </Link>
      </div>
      <div className=' border-b-2'>
        <h2
          className=' cursor-pointer hover:bg-green-100 p-4'
          onClick={() => setShowResult((prev) => !prev)}
        >
          Result
        </h2>

        {showResult && (
          <>
            <MailTemplates result={true} />

            <Link href='/result'>
              <h4 className='py-1 px-4 font-normal text-sm hover:bg-green-100 cursor-pointer'>
                Overall performance
              </h4>
            </Link>
          </>
        )}
      </div>
      {/* <div className=' cursor-pointer hover:bg-green-100 p-4'>
        Export Result As
      </div> */}
    </div>
  )
}

export default SideMenu
