import * as React from 'react'

function SvgNavtolocation(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M7 21H6h0a3 3 0 01-3-3s0 0 0 0v-1M17 3h1a3 3 0 013 3v1M3 7V6h0a3 3 0 013-3h1M21 17v1a3 3 0 01-3 3h-1M13.136 16.546l2.818-7.6h0a.7.7 0 00-.894-.894l-7.6 2.819h0a.7.7 0 00.068 1.329l3.426.861.855 3.415h0a.7.7 0 001.327.07z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgNavtolocation
