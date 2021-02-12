import * as React from 'react'

function SvgCalendarSchedule9(props: React.SVGProps<SVGSVGElement>) {
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
          d='M7 11.008h10M13.944 6.842v1.666M10.056 6.842v1.666M15.333 17.008H8.667h0A1.667 1.667 0 017 15.342v-6h0c0-.92.746-1.667 1.667-1.667 0 0 0 0 0 0h6.666A1.667 1.667 0 0117 9.342v6h0a1.667 1.667 0 01-1.667 1.666z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M16 21H8h0a5 5 0 01-5-5s0 0 0 0V8h0a5 5 0 015-5h8a5 5 0 015 5v8h0a5 5 0 01-5 5z'
        />
      </g>
    </svg>
  )
}

export default SvgCalendarSchedule9
