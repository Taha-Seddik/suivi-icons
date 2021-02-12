import * as React from 'react'

function SvgTemperature(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M9 5a3 3 0 116 0M9 9.023C7.792 9.935 7 11.37 7 13a5 5 0 0010 0c0-1.63-.792-3.065-2-3.977M9 9.02V5M15 9.02V5M12 5v6' />
        <path d='M13.414 11.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M2 21.5c1.105-.667 2.895-.667 4 0M10 21.5c-1.105.667-2.895.667-4 0M10 21.5c1.105-.667 2.895-.667 4 0M18 21.5c-1.105.667-2.895.667-4 0M18 21.5c1.105-.667 2.895-.667 4 0M2 18c1.105-.667 2.895-.667 4 0M18 18c1.105-.667 2.895-.667 4 0' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgTemperature
