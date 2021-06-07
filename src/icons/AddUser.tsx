import * as React from 'react'

function SvgAddUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 24h24V0H0z' fill='none' />
      <path
        d='M21.256 9.889a9.53 9.53 0 11-7.145-7.145M19.124 6.458V3.292M17.542 4.876h3.166'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={9.5}
        r={2.5}
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M7.5 16a2.498 2.498 0 012.289-1.5h4.422A2.498 2.498 0 0116.5 16'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgAddUser
