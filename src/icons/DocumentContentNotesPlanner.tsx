import * as React from 'react'

function SvgDocumentContentNotesPlanner(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M8 13h8M8 17h8M6 3h9.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0120 7.828V19a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z' />
        <path d='M20 8h-4a1 1 0 01-1-1V3M8 9h3' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgDocumentContentNotesPlanner
