import * as React from 'react'

function SvgHeartbeat2(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M18 12h-1.691a.5.5 0 00-.447.276l-1.415 2.829a.5.5 0 01-.894 0L10.43 8.861a.5.5 0 00-.887-.014l-1.559 2.89a.502.502 0 01-.44.263H3' />
        <path d='M3.523 9C4.76 5.507 8.083 3 12 3a9 9 0 019 9 9 9 0 01-9 9c-3.917 0-7.24-2.507-8.477-6' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgHeartbeat2
