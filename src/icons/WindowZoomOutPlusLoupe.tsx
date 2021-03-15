import * as React from 'react'

function SvgWindowZoomOutPlusLoupe(props: React.SVGProps<SVGSVGElement>) {
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
        transform='matrix(-1 0 0 1 24 0)'
      >
        <path d='M10 20H5h0a2 2 0 01-2-2s0 0 0 0V6h0a2 2 0 012-2h14a2 2 0 012 2v2' />
        <circle cx={16.5} cy={14.5} r={4.5} />
        <path d='M18 14.5h-3M22 20l-2.32-2.32' />
      </g>
      <path fill='none' d='M24 0H0v24h24z' />
    </svg>
  )
}

export default SvgWindowZoomOutPlusLoupe
