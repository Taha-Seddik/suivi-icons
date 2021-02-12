import * as React from 'react'

function SvgGridLayout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path fill='none' d='M24 24H0V0h24z' />
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={2}
        strokeWidth={1.5}
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M14 21V3M3 12h11'
      />
    </svg>
  )
}

export default SvgGridLayout
