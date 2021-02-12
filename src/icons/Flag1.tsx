import * as React from 'react'

function SvgFlag1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M5 21V3.93M19 14.02V4M5 14s.875-.727 3.5-.727S12.875 15 15.5 15s3.5-.977 3.5-.977M5 3.932S5.875 3 8.5 3s4.375 1.727 7 1.727S19 4 19 4'
        />
      </g>
    </svg>
  )
}

export default SvgFlag1
