import * as React from 'react'

function SvgBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <path d='M0 0h24v24H0V0z' id='Book_svg__a' />
      </defs>
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M17 18H6M3 18V6a3 3 0 013-3h10a2 2 0 012 2v9a1 1 0 01-1 1H6a3 3 0 00-3 3v0a3 3 0 003 3h13a2 2 0 002-2V5' />
      </g>
      <use fill='none' xlinkHref='#Book_svg__a' />
      <use xlinkHref='#Book_svg__a' fill='none' />
    </svg>
  )
}

export default SvgBook
