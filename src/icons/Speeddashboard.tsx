import * as React from 'react'

function SvgSpeeddashboard(props: React.SVGProps<SVGSVGElement>) {
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
        <circle
          cx={12}
          cy={12.5}
          r={1.75}
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 6.5v1M7.76 8.26l.7.71M13.24 11.26l3-3M8.5 17h7M18 12.5h-1M7 12.5H6M11.719 3.5h0A9.1 9.1 0 003 12.481h0A8.979 8.979 0 006.739 19.8h0c.667.466 1.463.71 2.276.7h5.978a3.814 3.814 0 002.227-.677h0A8.995 8.995 0 0011.719 3.5z'
        />
      </g>
    </svg>
  )
}

export default SvgSpeeddashboard
