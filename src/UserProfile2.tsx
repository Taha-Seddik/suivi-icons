import * as React from 'react'

function SvgUserProfile2(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M9.914 10.179a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M15 11h4M18 14.5h-3M12 18.041a3.088 3.088 0 00-.771-1.124v0a3.09 3.09 0 00-2.1-.824H7.871c-.779 0-1.529.294-2.1.824v0A3.072 3.072 0 005 18.041M13 7h-2a1 1 0 01-1-1V3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1z' />
        <path d='M10 5H4.041A2.041 2.041 0 002 7.041V19a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-6' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgUserProfile2
