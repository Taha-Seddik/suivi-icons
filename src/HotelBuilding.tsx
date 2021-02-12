import * as React from 'react'

function SvgHotelBuilding(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M17 21V4a1 1 0 00-1-1H8a1 1 0 00-1 1v17M7 9H3a1 1 0 00-1 1v11M22 21V10a1 1 0 00-1-1h-4M9.5 17h5M13.5 17v4M10.5 21v-4M10 10.5h4M10 13.5h4M10 7.5h4M5 13.5h2M5 17h2M17 13.5h2M17 17h2M23 21H1' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgHotelBuilding
