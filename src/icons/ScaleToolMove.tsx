import * as React from 'react'

function SvgScaleToolMove(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M10 21H5a2 2 0 01-2-2v-5a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2zM13 7h4v4M11.41 12.59L17 7' />
        <path d='M16 21h3a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgScaleToolMove
