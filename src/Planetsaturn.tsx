import * as React from 'react'

function SvgPlanetsaturn(props: React.SVGProps<SVGSVGElement>) {
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
          cy={12}
          r={8}
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
          d='M7.733 12h0A4.267 4.267 0 0112 7.733M22.8 5.765c1.148 1.988-2.757 6.391-8.722 9.835-5.964 3.444-11.73 4.623-12.878 2.635M1.2 18.24c-.7-1.21.47-3.31 2.83-5.55M16.59 5.45c3.11-.93 5.51-.89 6.21.31'
        />
      </g>
    </svg>
  )
}

export default SvgPlanetsaturn
