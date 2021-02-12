import * as React from 'react'

function SvgBlackboardchart(props: React.SVGProps<SVGSVGElement>) {
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
          d='M22 3H2M21 3v11.882C21 16.052 19.993 17 18.75 17H5.25C4.007 17 3 16.052 3 14.882V3M13 17l2 4M11 17l-2 4'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M16 8l-3.333 3.333-2-2L8 12'
        />
      </g>
    </svg>
  )
}

export default SvgBlackboardchart
