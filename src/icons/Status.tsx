import * as React from 'react'

function SvgStatus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M11.905 8.342H8.097a.786.786 0 00-.628 1.257l1.904 2.538a.785.785 0 001.256 0L12.533 9.6a.785.785 0 00-.628-1.257v0z'
        stroke='#828B9F'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx={10}
        cy={10}
        r={7.071}
        transform='rotate(135 10 10)'
        stroke='#828B9F'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default SvgStatus
