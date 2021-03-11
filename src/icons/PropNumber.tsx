import * as React from 'react'

function SvgPropNumber(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M9.7 15.45l1.15-6.9M13.15 15.45l1.15-6.9M15.8 10.3h-7M15.2 13.7h-7M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPropNumber
