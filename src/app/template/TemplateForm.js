'use client'
import React from 'react'

function TemplateForm({ templateState, setTemplateState }) {
  // console.log(templateState)
  return (
    <div className='flex flex-col p-8 gap-2 h-[95vh] overflow-y-auto '>
      <div className='flex flex-col'>
        <h4 htmlFor='name' className=' text-sm font-semibold'>
          Template Name
        </h4>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={templateState?.name}
          onChange={(e) =>
            setTemplateState({ ...templateState, name: e.target.value })
          }
          className=' border-2 rounded p-1 text-sm focus:outline-slate-500'
        />
      </div>
      <div className='flex flex-col'>
        <h4 htmlFor='subject' className=' text-sm font-semibold'>
          Subject
        </h4>
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          value={templateState?.subject}
          onChange={(e) =>
            setTemplateState({
              ...templateState,
              subject: e.target.value,
            })
          }
          className=' border-2 rounded p-1 text-sm focus:outline-slate-500'
        />
      </div>
      <div className='flex flex-col'>
        <h4 htmlFor='subject' className=' text-sm font-semibold'>
          Redirect url
        </h4>
        <input
          type='text'
          name='redirectURL'
          placeholder='Enter url to redirect'
          value={templateState?.redirect}
          onChange={(e) =>
            setTemplateState({
              ...templateState,
              redirect: e.target.value,
            })
          }
          className=' border-2 rounded p-1 text-sm focus:outline-slate-500'
        />
      </div>
      <div className='flex flex-col'>
        <h4 htmlFor='email' className=' text-sm font-semibold'>
          Email
        </h4>
        <textarea
          type='text'
          name='email'
          placeholder='Write your mail using HTML or TEXT. For line break use <br>'
          value={templateState?.mailBody}
          onChange={(e) =>
            setTemplateState({
              ...templateState,
              mailBody: e.target.value,
            })
          }
          className=' border-2 rounded p-1 text-sm focus:outline-slate-500 min-h-10'
          cols='20'
        />
      </div>
    </div>
  )
}

export default TemplateForm
