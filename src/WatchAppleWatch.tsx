import * as React from 'react'

function SvgWatchAppleWatch(props: React.SVGProps<SVGSVGElement>) {
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
          d='M16 6.857V4a1 1 0 00-1-1H9a1 1 0 00-1 1v2.857M8 17.143V20a1 1 0 001 1h6a1 1 0 001-1v-2.857M8 17.143h8a2 2 0 002-2V9a2 2 0 00-2-2H8a2 2 0 00-2 2v6.143a2 2 0 002 2zM11 13v-3M14 13h-3'
        />
      </g>
    </svg>
  )
}

export default SvgWatchAppleWatch
