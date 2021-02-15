import * as React from 'react'

function SvgUserProfileAdd2(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M7.5 3v3M16.5 3v3M3 9.5h18' />
        <rect width={18} height={16.5} x={3} y={4.5} rx={3} />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgUserProfileAdd2
