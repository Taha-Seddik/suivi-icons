import * as React from 'react'

function SvgDatabase(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M5 18c0 1.381 3.134 2.5 7 2.5s7-1.119 7-2.5V6c0-1.381-3.134-2.5-7-2.5S5 4.619 5 6v12z' />
        <path d='M19 6c0 1.381-3.134 2.5-7 2.5S5 7.381 5 6M19 14c0 1.381-3.134 2.5-7 2.5S5 15.381 5 14M19 10c0 1.381-3.134 2.5-7 2.5S5 11.381 5 10' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgDatabase
