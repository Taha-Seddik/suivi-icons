import * as React from 'react'

function SvgPlane(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M10 13l-3.58 6.25h-.01c-.14.23-.06.54.18.68.07.04.16.06.24.06h1.68-.01c.28-.01.56-.13.75-.35l5.82-6.66' />
        <path d='M8.85 15h-2.2l-.01-.001a5.04 5.04 0 01-3-1.01l-2.67-2 1-1-1-4h3l2 3h14-.01c1.65-.01 3 1.34 3 3v0c0 1.1-.9 2-2 2h-7.63' />
        <path d='M15.125 10l-4.96-5.66-.01-.01c-.19-.22-.47-.35-.76-.35h-1.7c-.28 0-.5.22-.5.5 0 .08.02.17.06.24l3 5.25' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPlane
