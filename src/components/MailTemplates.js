'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function MailTemplates({ result }) {
  const segment = result ? 'result' : 'template'
  const [list, setList] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/api/template`)
      .then((res) => {
        setList(res.data)
        // console.log(res)
      })
  }, [])

  return (
    <section className=' font-normal text-sm '>
      {list.map((item) => (
        <Link href={`/${segment}/${item.id}`} key={item.id}>
          <div className='py-1 px-4 hover:bg-green-100 cursor-pointer truncate'>
            {item.name}
          </div>
        </Link>
      ))}
    </section>
  )
}

export default MailTemplates
