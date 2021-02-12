import * as React from 'react'

function SvgMapLocationCheckmark(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M15 3.01V10M9 4.78V19M21 11V5.613a1 1 0 00-.684-.949l-4.684-1.561a2.005 2.005 0 00-1.265-.001L9.632 4.68a1.998 1.998 0 01-1.265 0L4.316 3.33A1 1 0 003 4.279v11.339c0 .379.214.725.553.895l4.553 2.276a1.997 1.997 0 001.789 0L11 18.236' />
        <path d='M18 13a4 4 0 110 8 4 4 0 010-8' />
        <path d='M19.556 16.028l-1.945 1.945-1.167-1.167' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgMapLocationCheckmark
