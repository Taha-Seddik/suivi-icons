import * as React from 'react'

function SvgTaskDueDate(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M20.932 13.432h0A8.995 8.995 0 1110.567 3.067M20.496 8.799h0c.197.53.343 1.077.437 1.634M19.002 6.197h0a8.937 8.937 0 00-1.199-1.199M15.201 3.505h0a8.897 8.897 0 00-1.634-.438' />
        <path d='M16 12.391h-4.391V7' />
      </g>
      <path fill='none' d='M24 24H0V0h24z' />
    </svg>
  )
}

export default SvgTaskDueDate
