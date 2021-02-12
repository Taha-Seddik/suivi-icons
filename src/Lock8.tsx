import * as React from 'react'

function SvgLock8(props: React.SVGProps<SVGSVGElement>) {
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
        strokeWidth={1.466}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M17 21H7a2 2 0 01-2-2v-8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z' />
        <path strokeWidth={1.403} d='M16 9V7a4 4 0 00-4-4v0a4 4 0 00-4 4v2' />
        <path
          strokeWidth={1.5}
          d='M11.998 14.5a.5.5 0 10.004 1 .5.5 0 00-.004-1'
        />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgLock8
