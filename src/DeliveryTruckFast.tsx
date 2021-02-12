import * as React from 'react'

function SvgDeliveryTruckFast(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M18.704 18.296a1.583 1.583 0 11-2.24 2.24 1.583 1.583 0 112.24-2.24M7.704 18.296a1.583 1.583 0 11-2.238 2.24 1.583 1.583 0 012.238-2.24M10 4h4a1 1 0 011 1v10H2' />
        <path d='M5 19.416H3a1 1 0 01-1-1V13M15 7h4.323c.409 0 .777.249.928.629l1.606 4.014c.094.236.143.488.143.742v5.948a1 1 0 01-1 1h-1.831M16 19.42H8.17' />
        <path d='M22 14h-4v-4h3.2M2 4h5M2 7h3M3 10H2' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgDeliveryTruckFast
