import * as React from 'react'

function SvgDocumentsFileWord(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M20 8h-4 0a1 1 0 01-1-1s0 0 0 0V3' />
        <rect width={10} height={10} x={3} y={8} rx={1.657} ry={0} />
        <path d='M5.75 11.25l.5 3.5h.329l1.421-3 1.421 3h.329l.5-3.5' />
        <path d='M6 8V5h0a2 2 0 012-2h7.172a2 2 0 011.414.586l2.828 2.828h0A2 2 0 0120 7.828V19a2 2 0 01-2 2H8h0a2 2 0 01-2-2s0 0 0 0v-1' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgDocumentsFileWord
