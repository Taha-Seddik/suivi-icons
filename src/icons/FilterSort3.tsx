import * as React from 'react'

function SvgFilterSort3(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M14.5 13.5l5.207-5.207A1 1 0 0020 7.586V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2.586c0 .265.105.52.293.707L9.5 13.5M9.5 13.5v6.249c0 .813.764 1.41 1.553 1.213l2.5-.625a1.25 1.25 0 00.947-1.213V13.5' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgFilterSort3
