import * as React from 'react'

function SvgSofaChair(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M18 14H6v-2.5A1.5 1.5 0 004.5 10h-1A1.5 1.5 0 002 11.5V16a2 2 0 002 2h16a2 2 0 002-2v-4.5a1.5 1.5 0 00-1.5-1.5h-1a1.5 1.5 0 00-1.5 1.5V14zM5 18v2M19 18v2M4 10V8a3 3 0 013-3h10a3 3 0 013 3v2' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgSofaChair
