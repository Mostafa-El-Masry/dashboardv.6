"use client"
import Link from '@/node_modules/next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

interface page {
  id: number;
}

const NextJs = () => {
  const router = useRouter();
  const navigation = (page) => {
    router.push(page);
    };
  return (
    <>
    <h1 className="h1">Next JS Mastering (dashboard)</h1>
    <div className="flex justify-evenly absolute left-0 top-0">
      <Link className='Link' href="/">Home</Link>
      <Link className='Link' href="/content/Next-JS/HTML">HTML</Link>
      <Link className='Link' href="/content/Next-JS/CSS">CSS</Link>
      <Link className='Link' href="/content/Next-JS/JS">JS</Link>
      <button className='Link' onClick={() => navigation("/content/Next-JS/NextJSTricks")}>Next JS</button>
      <Link className='Link' href="/content/Next-JS/TextEditor">Text Editor</Link>
      </div>
    </>

  )
}

export default NextJs