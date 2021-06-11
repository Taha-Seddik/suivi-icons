import * as React from 'react'

function SvgCopyPasteSelectAddPlus2(props: React.SVGProps<SVGSVGElement>) {
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
        <rect width={14} height={14} x={7} y={7} rx={1.105} ry={0} />
        <path d='M7 17H5h0a2 2 0 01-2-2s0 0 0 0V5h0a2 2 0 012-2h10a2 2 0 012 2v2' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgCopyPasteSelectAddPlus2
