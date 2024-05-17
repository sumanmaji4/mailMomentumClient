'use client'
import React, { useEffect, useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import TemplateForm from '../TemplateForm'
import axios from 'axios'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import MyIFrame from '@/components/MyIFrame'
import { useRouter } from 'next/navigation'

function Page({ params: { id } }) {
  const router = useRouter()
  const [templateState, setTemplateState] = useState({
    loading: false,
    name: '',
    subject: '',
    mailBody: '',
    redirect: '',
  })

  //   `${process.env.NEXT_PUBLIC_HOST_URL}/api/template/{id}`

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/api/template/${id}`)
      .then((res) => {
        setTemplateState({
          ...templateState,
          loading: false,
          name: res.data.name,
          subject: res.data.name,
          mailBody: res.data.mailBody,
          redirect: res.data.redirect,
        })
      })
      .catch((error) => {
        toast.error('template not found')
        router.push('/')
      })
  }, [id])

  function handleUpdate() {
    setTemplateState({ ...templateState, loading: true })
    // console.log(templateState)
    try {
      axios.patch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/template/${id}`, {
        name: templateState.name,
        subject: templateState.subject,
        mailBody: templateState.mailBody,
        redirect: templateState.redirect,
      })
    } catch {
      toast.error('unable update template')
    } finally {
      // console.log(templateState)
      toast.success('template update successful')
      setTemplateState({ ...templateState, loading: false })
    }
  }

  function handleDelete() {
    try {
      axios.delete(`${process.env.NEXT_PUBLIC_HOST_URL}/api/template/${id}`)
    } catch {
      toast.error('unable delete template')
    } finally {
      // console.log(templateState)
      toast.success('template deleted')
      window.location.href = '/'
    }
  }

  return (
    <div className=' w-full h-screen border-2 overflow-hidden'>
      <div className='border-2 border-slate-200 p-2 flex justify-end gap-4'>
        {templateState.loading ? (
          <button
            disabled
            className='p-1 bg-green-300 rounded px-2 flex justify-center items-center'
          >
            <Loader2 className=' animate-spin' />
            Please wait
          </button>
        ) : (
          <button
            className='p-1 bg-green-400 rounded px-2 hover:bg-green-300 font-semibold'
            onClick={handleUpdate}
          >
            Update
          </button>
        )}

        <button
          className='p-1 bg-red-400 rounded px-2 hover:bg-red-300 font-semibold'
          onClick={handleDelete}
        >
          Delete
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
          <MyIFrame mailBody={templateState.mailBody} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default Page
