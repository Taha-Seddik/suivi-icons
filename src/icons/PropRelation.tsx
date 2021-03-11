import * as React from 'react'

function SvgPropRelation(props: React.SVGProps<SVGSVGElement>) {
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
          d='M18.364 5.636a9 9 0 010 12.728 9 9 0 01-12.728 0 9 9 0 010-12.728 9 9 0 0112.728 0M7.05 12.707l5.657-5.657'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M11.293 14.121v2.828h2.828M16.95 11.293l-5.657 5.657M9.879 7.05h2.828v2.828'
        />
      </g>
    </svg>
  )
}

export default SvgPropRelation
