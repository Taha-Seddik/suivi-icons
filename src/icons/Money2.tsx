import * as React from 'react'

function SvgMoney2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0V0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M3.001 9c0 1.105 2.238 2 5 2M8 15c-2.761 0-4.999-.895-4.999-2M12.999 5H13v3M11.001 16c0 1.105 2.238 2 5 2s5-.895 5-2M11.001 12c0 1.105 2.238 2 5 2s5-.895 5-2M16 10c-2.76 0-5 .895-4.998 2'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M11.001 12v8c0 1.105 2.238 2 5 2M16 10c2.76 0 5 .895 4.998 2'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M21 12v8c0 1.105-2.238 2-5 2M8 19c-2.761 0-5-.895-5-2'
        />
        <ellipse
          cx={8}
          rx={5}
          ry={2}
          cy={5}
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
          d='M3 5v12'
        />
      </g>
    </svg>
  )
}

export default SvgMoney2
