import * as React from 'react'

function SvgFilterSortCircle1(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M10.4 13.518v2.592h0a.889.889 0 001.286.8l1.424-.712h0a.89.89 0 00.492-.8v-1.88l2.053-1.584h0a.889.889 0 00.346-.7V9.889h0a.889.889 0 00-.89-.889H8.889h0A.889.889 0 008 9.889v1.341h0a.89.89 0 00.346.7z' />
        <circle cx={12} cy={12} r={9} />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgFilterSortCircle1
