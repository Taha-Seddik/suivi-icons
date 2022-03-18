import * as React from 'react'

function SvgResizeArrows(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M14.866 3.477h0a9.023 9.023 0 00-5.732 0M20.523 14.866h0a9.023 9.023 0 000-5.732M3.477 9.134h0a9.023 9.023 0 000 5.732M9.134 20.523h0a9.023 9.023 0 005.732 0M17.536 6.464L14 10M14.707 6.464h2.829v2.829M6.464 6.464L10 10M6.464 9.293V6.464h2.829M17.536 17.536L14 14M17.536 14.707v2.829h-2.829M6.464 17.536L10 14M9.293 17.536H6.464v-2.829' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgResizeArrows
