import * as React from 'react'

function SvgSwitchPanel(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M2 10h7M7 8l2 2-2 2M22 13.5h-7M17 15.5l-2-2 2-2' />
        <path d='M12 6h8a2 2 0 012 2v11a2 2 0 01-2 2h-6a2 2 0 01-2-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgSwitchPanel
