import * as React from 'react'

function SvgPrivateBoard(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M5.94 9l.721-4.329A2.001 2.001 0 018.634 3h6.611a2 2 0 011.973 1.671L17.94 9' />
        <circle cx={7.226} cy={18} r={3} />
        <circle cx={16.655} cy={18} r={3} />
        <path d='M10.226 18c.947-1.143 2.482-1.143 3.429 0M3 13c4.971-2.667 13.029-2.667 18 0' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgPrivateBoard
