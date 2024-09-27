import Link from 'next/link'
import React from 'react'

const Healthimprovmets = () => {
  return (
    <>
      <h1 className="h1">Health improvmets</h1>

      <div className="flex justify-evenly absolute left-0 top-0">
      <Link className='Link' href="/">Home</Link>
      </div>

      <Link href="/content/Health-improvmets/Mental">Mental Health</Link>
      <Link href="/content/Health-improvmets/Pysical">Pysical Health</Link>
    </>
  )
}

export default Healthimprovmets