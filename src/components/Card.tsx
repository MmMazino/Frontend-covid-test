import React from 'react'

type Props = {
    title:string
    number:number
}

export default function Card({title,number}: Props) {
  return (
      <div className='rounded-md px-3 border-b-2 shadow-md max-w-sm text-xl text-center p-3 my-5'>
        <h2 className='my-2'>{title}</h2>
        <h3 className='my-2'>{number}</h3>
      </div>
  )
}