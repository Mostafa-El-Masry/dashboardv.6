import Link from 'next/link'

const Diabitieschart = () => {
  return (
    <>
    <h1 className="h1">Diabities chart</h1>
    <Link className='Link' href="/content/Health-improvmets/Pysical">Back</Link>
    <h2>Create a chart for diabites Fasting &amp; 2h after each main meal</h2>
    <table className=''>
        <thead>
            <th>Date</th>
            <th>Fasting</th>
            <th>2h+ Breakfast</th>
            <th>2h+ Lunch</th>
            <th>2h+ Diner</th>
        </thead>
        <tbody>
            <tr>
                <td>23/06/2024</td>
                <td>222</td>
                <td>377</td>
                <td>350</td>
                <td>320</td>
            </tr>
            <tr>
                <td>24/06/2024</td>
                <td>289</td>
                <td>260</td>
                <td>265</td>
                <td>222</td>
            </tr>
            <tr>
            <td>25/06/2024</td>
                <td>230</td>
                <td>280</td>
                <td>410</td>
                <td>284</td>
            </tr>
            <tr>
            <td>26/06/2024</td>
                <td>224</td>
                <td>181</td>
                <td>267</td>
                <td>233</td>
            </tr>
            <tr>
            <td>27/06/2024</td>
                <td>194</td>
                <td>289</td>
                <td>297</td>
                <td>270</td>
            </tr>
            <tr>
            <td>28/06/2024</td>
                <td>189</td>
                <td>190</td>
                <td>180</td>
                <td>149</td>
            </tr>
        </tbody>
    </table>
    
    </>
  )
}

export default Diabitieschart