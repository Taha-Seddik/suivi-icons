import * as React from 'react'

function SvgBasketPack(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M21.064 19.784l-2.655-12A1 1 0 0017.433 7H6.567a1 1 0 00-.976.784l-2.655 12A1 1 0 003.912 21h16.176a1 1 0 00.976-1.216zM14.5 7V4.5v0A2.5 2.5 0 0012 2h-.001a2.5 2.5 0 00-2.5 2.5V7M18.16 7.34L15.14 21' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBasketPack
