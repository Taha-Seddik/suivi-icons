import * as React from 'react'

function SvgHospitalboardsquare(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M16 10.182h-2.18V8v0a1 1 0 00-1-1h-1.636 0a1 1 0 00-1 1s0 0 0 0v2.182H8h0a1 1 0 00-1 1s0 0 0 0v1.636h0a1 1 0 001 1h2.182V16h0a1 1 0 001 1h1.638a1 1 0 001-1v-2.182H16a1 1 0 001-1v-1.636 0a1 1 0 00-1-1z' />
        <rect width={18} height={18} x={3.002} y={3} rx={2.761} ry={0} />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgHospitalboardsquare
