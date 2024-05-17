'use client'
import React, { useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

import TemplateForm from './TemplateForm'
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import MyIFrame from '@/components/MyIFrame'

function page() {
  // const [name, setName] = useState('')
  // const [subject, setSubject] = useState('')
  // const [mailBody, setMailBody] = useState('')
  // const [redirect, setRedirect] = useState('')
  // const [loading, setLoading] = useState(false)

  const [templateState, setTemplateState] = useState({
    loading: false,
    name: '',
    subject: '',
    mailBody: '',
    redirect: '',
  })

  const { name, subject, mailBody, redirect, loading } = templateState

  const router = useRouter()
  // console.log(name, subject, mailBody)
  // console.log(process.env.NEXT_PUBLIC_HOST_URL)

  function handleSave(name, subject, mailBody, redirect) {
    //validation
    if (name.trim() == '' || name.trim().length < 3) {
      toast.error('Invalid template name')
      return
    }
    if (subject.trim() == '' || subject.trim().length < 3) {
      toast.error('Invalid template subject')
      return
    }
    if (mailBody.trim() == '' || mailBody.trim().length < 3) {
      toast.error('Invalid template mailBody')
      return
    }
    if (redirect.trim() == '' || redirect.trim().length < 3) {
      toast.error('Invalid template redirect ')
      return
    }

    let res
    setTemplateState({ ...templateState, loading: true })
    try {
      axios
        .post(`${process.env.NEXT_PUBLIC_HOST_URL}/api/template`, {
          name,
          subject,
          mailBody,
          redirect,
        })
        .then((response) => {
          res = response.data
          console.log(res)
          toast.success('Template saved')
          window.location.href = `/template/${res.id}`
          // router.refresh()
          // router.reload()
          // router.push(`/template/${res.id}`)
        })
    } catch (error) {
      toast.error('Unable to save your template')
    } finally {
      setTemplateState({ ...templateState, loading: false })
    }
  }

  return (
    <div className=' w-full h-screen border-2 overflow-hidden'>
      <div className='border-2 border-slate-200 p-2 flex justify-end'>
        <button
          className='p-1 bg-green-400 rounded px-2 hover:bg-green-300 font-semibold'
          onClick={() => handleSave(name, subject, mailBody, redirect)}
        >
          Save
        </button>
      </div>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={50}>
          <TemplateForm
            templateState={templateState}
            setTemplateState={setTemplateState}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <MyIFrame mailBody={mailBody} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default page
