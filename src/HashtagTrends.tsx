import * as React from 'react'

function SvgHashtagTrends(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M8.4 10.087h1.978l.328-1.968M16.275 10.087h-2.016l.328-1.968M14.259 10.087l-.637 3.826H9.741l.637-3.826zM7.725 13.913h2.016l-.328 1.968M15.6 13.913h-1.978l-.328 1.968M18.53 5.82l1.19-1.2M5.47 18.18l-1.19 1.2M5.79 5.5l-1.2-1.2M18.21 18.5l1.2 1.2M21 12h1.69M1.31 12H3' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgHashtagTrends
