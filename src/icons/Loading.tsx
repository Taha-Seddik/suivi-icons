import * as React from 'react'

function SvgLoading(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M6.491 15.576a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M13.414 3.585a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M20.337 15.575a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M17.717 18.575a7.956 7.956 0 01-8.93 1.738M4.298 15.147A7.957 7.957 0 017.27 6.55M13.974 5.252a7.957 7.957 0 015.971 6.844' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgLoading
