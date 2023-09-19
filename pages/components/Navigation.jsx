import React from 'react'
import Link from 'next/link'
const Navigation = () => {
  return (
    <nav className="bg-[#4646E3] text-white h-16 flex items-center">
      <div className="flex justify-between items-center w-full px-4 mx-auto sm:max-w-[75rem]">
        <Link href="/">Logo</Link>
        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link href="/contributor">Contribute</Link>
          </li>
          <li>
            <Link href="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link href="https://github.com/hausanlp">Github</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation