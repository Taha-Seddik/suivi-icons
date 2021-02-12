import * as React from 'react'

function SvgTargetgoal(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M14.04 9.96l-2.51 2.51M14 6v4h4l4-4-2.667-1.333L18 2l-4 4z' />
        <path d='M11 3.975h0A8.52 8.52 0 1020.026 13' />
        <path d='M16.21 13h0A4.725 4.725 0 1111 7.79' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgTargetgoal
