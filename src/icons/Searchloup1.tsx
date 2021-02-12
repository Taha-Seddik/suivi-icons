import * as React from 'react'

function SvgSearchloup1(props: React.SVGProps<SVGSVGElement>) {
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
          d='M15.714 6.838a6.276 6.276 0 11-8.876 8.876 6.276 6.276 0 018.876-8.876M19 19l-3.29-3.29'
        />
      </g>
    </svg>
  )
}

export default SvgSearchloup1
