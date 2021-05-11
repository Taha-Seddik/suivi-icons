import * as React from 'react'

function SvgViewDashboard(props: React.SVGProps<SVGSVGElement>) {
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
        <circle cx={12} cy={12.505} r={2} />
        <path d='M16 8.51l-2.5 2.5M18.3 12.51h-.9M5.7 12.51h.89M12 6.2v.91M7.54 8.05l.45.45M11.719 3.5h0A9.1 9.1 0 003 12.481h0A8.979 8.979 0 006.739 19.8h0c.667.466 1.463.71 2.276.7h5.978a3.814 3.814 0 002.227-.677h0A8.995 8.995 0 0011.719 3.5z' />
      </g>
      <path fill='none' d='M24 24H0V0h24z' />
    </svg>
  )
}

export default SvgViewDashboard
