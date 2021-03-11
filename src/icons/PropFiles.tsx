import * as React from 'react'

function SvgPropFiles(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M14 17V9a2.008 2.008 0 00-2-2.008v0A2.009 2.009 0 009.983 9v7M7 8v9.05M17 8v7M14 17v.5a3.5 3.5 0 01-3.5 3.5v0A3.5 3.5 0 017 17.5V17' />
        <path d='M17 8v0a5 5 0 00-5-5v0a5 5 0 00-5 5v0' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPropFiles
