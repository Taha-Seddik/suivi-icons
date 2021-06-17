import * as React from 'react'

function SvgLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M0 0h20v20H0z' />
        <g
          stroke='#828B9F'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.333}
        >
          <path
            d='M13.333 16H6.667a1.333 1.333 0 01-1.334-1.333V10c0-.737.597-1.333 1.334-1.333h6.666c.737 0 1.334.596 1.334 1.333v4.667c0 .736-.597 1.333-1.334 1.333z'
            fill='#828B9F'
          />
          <path d='M7.333 8.667v-2h0A2.667 2.667 0 0110 4h0a2.667 2.667 0 012.667 2.667h0v2' />
        </g>
      </g>
    </svg>
  )
}

export default SvgLock
