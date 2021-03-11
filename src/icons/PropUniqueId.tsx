import * as React from 'react'

function SvgPropUniqueId(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0V0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M18.364 5.636a9 9 0 010 12.728 9 9 0 01-12.728 0 9 9 0 010-12.728 9 9 0 0112.728 0M8 15V9'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M11.6 15h2a3 3 0 003-3v0a3 3 0 00-3-3h-2v6'
        />
      </g>
    </svg>
  )
}

export default SvgPropUniqueId
