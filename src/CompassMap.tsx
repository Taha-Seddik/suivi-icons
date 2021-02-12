import * as React from 'react'

function SvgCompassMap(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12 21c4.95 0 9-4.05 9-9s-4.05-9-9-9-9 4.05-9 9 4.05 9 9 9z' />
        <path d='M10.236 9.553l4.928-1.327a.5.5 0 01.613.612L14.47 13.74a1 1 0 01-.706.708l-4.928 1.327a.5.5 0 01-.613-.612l1.307-4.902a1 1 0 01.706-.708z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M11.999 11.75a.25.25 0 10.002.5.25.25 0 00-.002-.5M12 3v1.5M12 21v-1.5M21 12h-1.5M3 12h1.5' />
      </g>
    </svg>
  )
}

export default SvgCompassMap
