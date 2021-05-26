import * as React from 'react'

function SvgDocumentsFile(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M18.414 6.414l-2.828-2.828A2 2 0 0014.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7.828a2 2 0 00-.586-1.414z' />
        <path d='M19 8h-4a1 1 0 01-1-1V3M10.21 15.982a1.412 1.412 0 11-1.996 1.996 1.412 1.412 0 011.996-1.996M15.386 15.04a1.412 1.412 0 11-1.996 1.997 1.412 1.412 0 011.996-1.996' />
        <path d='M10.624 16.98v-3.72a.94.94 0 01.592-.874l3.213-1.285a1 1 0 011.371.928v4.01' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgDocumentsFile
