import * as React from 'react'

function SvgBoardtextchartgraph(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12 16v4M8 21l1.86-5M16 21l-1.86-5M7.5 12v-2M10.5 12V7M13.5 12V9M16.5 12V7.45' />
        <rect width={18} height={13} x={3} y={3} rx={2} />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBoardtextchartgraph
