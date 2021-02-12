import * as React from 'react'

function SvgSunSeaSunrise(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12 5V3M2 13h2M4.89 5.89L6 7M19.11 5.89L18 7M22 12.88h-2M3 17.382v0a4.434 4.434 0 013.6 0v0a4.434 4.434 0 003.6 0v0a4.434 4.434 0 013.6 0v0a4.434 4.434 0 003.6 0v0a4.434 4.434 0 013.6 0v0M6.6 20.618v0a4.434 4.434 0 003.6 0v0a4.434 4.434 0 013.6 0v0a4.434 4.434 0 003.6 0v0M7 13a5 5 0 0110 0' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgSunSeaSunrise
