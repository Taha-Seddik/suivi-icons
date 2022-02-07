import * as React from 'react'

function SvgShare2(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M13.53 7.52l-4.06 3.04M16.405 4.642a2.032 2.032 0 11-2.874 2.874 2.032 2.032 0 012.874-2.874M13.53 16.48l-4.06-3.04M16.405 16.484a2.032 2.032 0 11-2.874 2.874 2.032 2.032 0 012.874-2.874M9.465 10.565a2.03 2.03 0 11-2.87 2.87 2.03 2.03 0 012.87-2.87' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgShare2
