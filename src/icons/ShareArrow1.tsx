import * as React from 'react'

function SvgShareArrow1(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M0 0h24v24H0V0z' id='share-arrow_1_svg__a' />
      </defs>
      <g fill='none'>
        <use xlinkHref='#share-arrow_1_svg__a' />
        <use xlinkHref='#share-arrow_1_svg__a' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M17 3h1a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3v-1.014'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M10 5.637c-3.825 0-7 1.952-7 6.511v.915c1.294-2.994 3.98-3.299 7-3.299v1.886a.75.75 0 001.254.556l4.5-4.079a.75.75 0 00-.018-1.128l-4.5-3.819A.75.75 0 0010 3.751v1.886z'
        />
      </g>
    </svg>
  )
}

export default SvgShareArrow1
