import * as React from 'react'

function SvgWatchclock(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M10.469 10.67l1.657 1.658 2.098-.508M6.227 13.638l-3.013 3.013h0a.731.731 0 000 1.034l3.101 3.1h0a.73.73 0 001.034 0l3.004-3.004M13.638 6.227l3.013-3.013h0a.73.73 0 011.034 0l3.101 3.101h0a.731.731 0 010 1.034l-3.013 3.013' />
        <circle cx={12} cy={12} r={6} />
      </g>
      <path fill='none' d='M24 24H0V0h24z' />
    </svg>
  )
}

export default SvgWatchclock
