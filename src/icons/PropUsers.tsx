import * as React from 'react'

function SvgPropUsers(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M3 18v0a4 4 0 014-4h4a4 4 0 014 4v0M16 4.651a2.5 2.5 0 110 5M11.405 4.996a3.401 3.401 0 11-4.81 4.81 3.401 3.401 0 014.81-4.81M17 13a4 4 0 014 4v0' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgPropUsers
