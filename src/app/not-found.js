import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=' w-screen h-screen flex flex-col justify-center items-center p-16 gap-4'>
      <h1 className=' font-extrabold text-6xl text-slate-300'>Not Found</h1>
      <p className=' font-bold text-2xl text-slate-300'>
        Could not find requested resource
      </p>
      <Link
        href='/'
        className='p-1 bg-green-200 rounded px-2 hover:bg-green-100 font-semibold'
      >
        Return Home
      </Link>
    </div>
  )
}
