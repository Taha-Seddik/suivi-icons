import * as React from 'react'

function SvgLtesignal(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M13.579 10.421a2.233 2.233 0 11-3.158 3.158 2.233 2.233 0 013.158-3.158M14.609 16.842a5.498 5.498 0 000-9.684M9.391 7.158a5.498 5.498 0 000 9.684' />
        <path d='M17.145 19.378A8.982 8.982 0 0021 12a8.982 8.982 0 00-3.855-7.378M6.855 4.622A8.982 8.982 0 003 12a8.982 8.982 0 003.855 7.378' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgLtesignal
