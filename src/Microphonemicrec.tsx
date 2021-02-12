import * as React from 'react'

function SvgMicrophonemicrec(props: React.SVGProps<SVGSVGElement>) {
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
          strokeWidth={1.5}
          d='M20.883 7.092h0a5.215 5.215 0 00-10.29.67h0a.979.979 0 00.3.767l4.579 4.579h0a.977.977 0 00.766.3h0a5.219 5.219 0 004.645-6.316z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M15.484 13.123L6.87 19.636h0a1.191 1.191 0 01-1.557-.108l-.84-.839h0a1.19 1.19 0 01-.107-1.558l6.512-8.614M4.89 19.11L3 21'
        />
      </g>
    </svg>
  )
}

export default SvgMicrophonemicrec
