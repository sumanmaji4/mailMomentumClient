'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

function Page() {
  const [templateList, setTemplateList] = useState([])
  const [myTemplate, setMyTemplate] = useState('')
  const [mailId, setMailId] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/api/template`)
      .then((res) => {
        setTemplateList(res.data)
        // console.log(res)
        if (res.data.length < 1) {
          router.push('/template')
        }
        setMyTemplate(res.data[0].id)
      })
  }, [])

  //   console.log(myTemplate)

  function handleSendMail() {
    if (!mailId.includes('@')) {
      toast.error('Enter a valid email')
      return
    }
    setLoading(true)

    axios
      .post(`${process.env.NEXT_PUBLIC_HOST_URL}/api/send`, {
        mailId,
        templateId: myTemplate,
      })
      .then((res) => {
        toast.success('Mail sent')
      })
      .catch((error) => {
        toast.error('Unable to send mail')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='w-full h-full overflow-auto p-4 flex flex-col'>
      <label className='flex flex-col mb-4'>
        <span className='text-sm font-semibold'>Select your template</span>
        <select
          className='text-sm border-2 p-1 rounded focus:outline-slate-500'
          onChange={(e) => setMyTemplate(e.target.value)}
        >
          {templateList.map((item) => (
            <option
              className=' px-4 rounded p-1 text-sm hover:bg-green-100 cursor-pointer truncate'
              value={item.id}
              key={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label className='flex flex-col mb-8'>
        <span className='text-sm font-semibold'>Add mail id</span>
        <input
          type='text'
          name='mailid'
          value={mailId}
          onChange={(e) => setMailId(e.target.value)}
          placeholder='Enter email id'
          className=' border-2 rounded p-1 text-sm focus:outline-slate-500'
        ></input>
      </label>

      {loading ? (
        <button
          disabled
          className='p-1 bg-green-300 rounded px-2 flex justify-center items-center font-semibold '
        >
          <Loader2 className=' animate-spin' />
          Please wait
        </button>
      ) : (
        <button
          className='p-1 bg-green-400 rounded px-2 hover:bg-green-300 font-semibold'
          onClick={handleSendMail}
        >
          Send
        </button>
      )}
    </div>
  )
}

export default Page
