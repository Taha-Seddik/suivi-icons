import * as React from 'react'

function SvgSnow(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12 3v18M14.168 4.421L12 6.59 9.832 4.421M20 7.38L4 16.62M19.647 10.088l-2.961-.793.793-2.962M4.353 13.912l2.961.793-.793 2.962M4 7.38l16 9.24M4.353 10.088l2.961-.793-.793-2.962M19.647 13.912l-2.961.793.793 2.962M9.832 19.579L12 17.41l2.168 2.169' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgSnow
