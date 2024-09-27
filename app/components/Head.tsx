import { CalendarDaysIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Head = () => {
  return (
    <main>
      <header className="flex max-sm:flex-col max-sm:items-center max-sm: gap-6 justify-between p-4 text-gray-600 font-normal" >
        <div className="flex max-sm:flex-col max-sm:items-center gap-6 justify-between items-end">
          <div className="text-blue-600 font-bold text-3xl">
            <Link href="./">M</Link>
          </div>
          <div className="flex items-center text-cyan-700 font-bold text-3xl gap-2"> 
          <CalendarDaysIcon size={26} strokeWidth={1.75}/>
            <Link href="/content/DailyRoutine/Calendix">Calendix</Link>
          </div>
          <nav className="flex gap-4">
            <Link href="">Features</Link>
            <Link href="">About</Link>
          </nav>
        </div>
        <nav className="flex gap-4 items-end">
          <Link className=" p-4" href="">Sign In</Link>
          <Link className="bg-blue-600 p-4 rounded-3xl text-white" href="">Get Started</Link>
        </nav>
      </header>
        
    </main>
  )
}

export default Head