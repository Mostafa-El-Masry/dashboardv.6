import Link from 'next/link'
import React from 'react'

const PysicalHealthImprovments = () => {
  return (
    
    <>
    <h1>Pysical Health Improvments</h1>
    <Link className='Link' href="/content/Health-improvmets">Back</Link>
 
    <h2>Create a chart for diabites Fasting &amp; 2h after each main meal</h2>
    <Link className='Link' href="/content/Health-improvmets/Pysical/Diabitieschart">Diabities chart</Link>

    <h2>Create a chart for how many time you Masturbate &amp; Try to reduce it.</h2>
    <Link className='Link' href="/content/Health-improvmets/Pysical/Masturbation">Masturbation</Link>

    </>
  )
}

export default PysicalHealthImprovments