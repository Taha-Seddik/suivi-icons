import * as React from 'react'

function SvgSignal1(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M6 19H4a1 1 0 01-1-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1zM13 19h-2a1 1 0 01-1-1v-7a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1zM20 19h-2a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1z' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgSignal1
