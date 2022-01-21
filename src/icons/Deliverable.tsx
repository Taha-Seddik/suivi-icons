import * as React from 'react'

function SvgDeliverable(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x={6.5}
        y={4.333}
        width={7}
        height={3.5}
        rx={0.408}
        fill='#828B9D'
      />
      <rect
        x={3}
        y={4.333}
        width={14}
        height={14}
        rx={1.633}
        stroke='#828B9D'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx={9.999}
        cy={4.333}
        r={1.583}
        fill='#fff'
        stroke='#828B9D'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgDeliverable
