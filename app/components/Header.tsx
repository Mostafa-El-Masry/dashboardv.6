import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="container flex gap-6 justify-between p-4 text-gray-600 font-normal" >
        <div className="flex gap-6 justify-between items-end">
          <p className="text-blue-600 font-bold text-3xl">
            <Link href="/">MatriX</Link>
          </p>
          <nav className="flex gap-4">
            <Link href="">Features</Link>
            <Link href="">About</Link>
          </nav>
        </div>
        <nav className="flex gap-4 items-end">
          <Link href="">Sign In</Link>
          <Link href="">Get Started</Link>
        </nav>
      </header>
    </>
  )
}

export default Header