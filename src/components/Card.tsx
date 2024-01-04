import React from 'react'

type Props = {
    title:string
    number:number
    color:string
}

export default function Card({title,number,color}: Props) {
  console.log(color);
  const cardClass = `rounded-md px-3 border-b-2 shadow-md max-w-sm text-xl text-center p-3 my-5 ${color}`
  return (
      <div className={cardClass}>
        <h2 className='my-2'>{title}</h2>
        <h3 className='my-2'>{number}</h3>
      </div>
  )
}