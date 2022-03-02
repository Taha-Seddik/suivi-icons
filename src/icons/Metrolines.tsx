import * as React from 'react'

function SvgMetrolines(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M18 5h3M3 5h11M10 12h11M3 12h3M18 19h3M3 19h11M17.414 3.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M9.414 10.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M17.414 17.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgMetrolines
