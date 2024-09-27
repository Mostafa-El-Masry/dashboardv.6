import Link from 'next/link'
import React from 'react'

const Stablelivingsituation = () => {
  return (
    <>
    <h1 className="h1">Stable living situation</h1>
    <div className="flex justify-evenly absolute left-0 top-0">
      <Link className='Link' href="/">Home</Link>
    </div>
    <Link className='Link' href="/content/Stable-living-situation/Finances">Finances</Link>
    </>
  )
}

export default Stablelivingsituation