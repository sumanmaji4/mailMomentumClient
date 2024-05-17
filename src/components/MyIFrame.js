import React from 'react'

function MyIFrame({ mailBody }) {
  const combinedCode = `<html>
    <style>
      
    </style>
    <body>
  
    <div>${mailBody}</div>
    
    </body>
    <script>
     
    </script>
  </html>`

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}` // copied from chat gpt
  return (
    <div className='bg-white h-[calc(100lvh-60px)]'>
      <iframe className='w-full h-full' src={iframeCode} />
    </div>
  )
}

export default MyIFrame
