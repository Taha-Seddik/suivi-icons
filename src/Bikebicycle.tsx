import * as React from 'react'

function SvgBikebicycle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M7.57 11.94l1.56-1.85L16 8l-5 7H5l2.57-3.06z' />
        <path d='M9 15h0a4.01 4.01 0 01-4.01 4.01C2.77 19.01.97 17.22.97 15a3.997 3.997 0 014-4.02c.94-.01 1.86.33 2.58.94M19 11a4 4 0 100 8 4 4 0 100-8zM16 6l2-1M19 15l-3-9M7 7h3' />
        <path d='M16 8l-5 7H5l4.13-4.913L16 7.997zM11 15L8 7' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBikebicycle
