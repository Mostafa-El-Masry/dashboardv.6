import Link from "next/link"

const NextJSTricks = () => {
  return (
    <>
    <h1 className="h1">NextJSTricks</h1>
    <Link className='Link' href="/content/Next-JS">Back</Link>
    <h2>useRouter</h2>
    <ul>
      <li>&#34;use client&#34;</li>
      <li>import &#123; useRouter &#125; from &#39;next/navigation&#39;;</li>
      <li>const router = useRouter&#40;&#41;&#59;</li>
      <li> const navigation &#61; &#40;page&#41; &#61;&gt; &#123;<br />
        router&#46;push&#40;page&#41;&#59;
      <br /> &#125;&#59; </li>
      <li>	&#60;button onClick &#61;&#123;&#40;&#41;&#61;&#62; navigation&#40;&#34;/path to link&#34;&#41;&#125;&#62;Next JS&#60;/button&#62;</li>
    </ul>
    </>
  )
}

export default NextJSTricks