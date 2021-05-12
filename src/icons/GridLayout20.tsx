import * as React from 'react'

function SvgGridLayout20(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M19 21h-3a2 2 0 01-2-2v-5a2 2 0 012-2h3a2 2 0 012 2v5a2 2 0 01-2 2zM19 9h-3a2 2 0 01-2-2V5a2 2 0 012-2h3a2 2 0 012 2v2a2 2 0 01-2 2zM5 3h3a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM5 15h3a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgGridLayout20
