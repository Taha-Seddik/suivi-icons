import * as React from 'react'

function SvgLegofigurehead(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M16.5 18.5v2a.5.5 0 01-.5.5H8h0a.5.5 0 01-.5-.5s0 0 0 0v-2' />
        <rect width={15} height={13} x={4.5} y={5.5} rx={1.657} ry={0} />
        <path d='M8 5.5v-1h0A1.5 1.5 0 019.5 3h5A1.5 1.5 0 0116 4.5v1M9.392 13.848h0a3.484 3.484 0 005.216 0M14.347 10.592h0a.124.124 0 00-.124.125h0a.125.125 0 10.124-.125M9.652 10.592h0a.125.125 0 10.125.125v0a.125.125 0 00-.125-.125' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgLegofigurehead
