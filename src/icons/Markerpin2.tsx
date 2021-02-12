import * as React from 'react'

function SvgMarkerpin2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.447}
          d='M5.127 10.045v-.172A6.873 6.873 0 0112 3v0a6.873 6.873 0 016.873 6.873v.172c0 3.461-4.382 8.671-6.148 10.631a.973.973 0 01-1.45 0c-1.766-1.96-6.148-7.17-6.148-10.631z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.447}
          d='M10 9.955a2 2 0 002 2v0a2 2 0 002-2v-.037a2 2 0 00-2-2v0a2 2 0 00-2 2'
        />
      </g>
    </svg>
  )
}

export default SvgMarkerpin2
