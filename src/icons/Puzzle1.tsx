import * as React from 'react'

function SvgPuzzle1(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M21 15.669v3.22M20.999 7.277v3.22H21a2.688 2.688 0 00-1.4.091h0a2.61 2.61 0 00-1.687 1.835h0a2.644 2.644 0 002.559 3.299h0c.177 0 .354-.018.528-.053v3.22h0A2.11 2.11 0 0118.889 21h-3.22v.001h0c.094-.466.063-.95-.091-1.4h0a2.61 2.61 0 00-1.835-1.687h0a2.644 2.644 0 00-3.3 2.559h0c.001.177.019.354.054.528L7.278 21h0a2.11 2.11 0 01-2.111-2.11v-3.22h0c-.174.035-.35.053-.528.053h0a2.644 2.644 0 01-2.559-3.299h0a2.61 2.61 0 011.687-1.835h0c.45-.154.934-.185 1.4-.091h-.001v-3.22h0a2.11 2.11 0 012.111-2.111h3.22a2.701 2.701 0 01-.053-.528h0a2.644 2.644 0 013.299-2.559h0c.858.216 1.548.85 1.835 1.687h0c.154.45.185.933.09 1.4h3.22A2.11 2.11 0 0121 7.278' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPuzzle1
