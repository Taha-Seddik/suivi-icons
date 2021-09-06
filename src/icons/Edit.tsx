import * as React from 'react'

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M17.379 4.621v0h0a2.122 2.122 0 010 3l-9.987 9.987h0a2 2 0 01-.929.526L3 19l.866-3.463h0a2 2 0 01.526-.929l9.988-9.987h0a2.121 2.121 0 012.999 0zM15.5 9.5l-3-3M21 18l-1.094 1.094h0a3.094 3.094 0 01-4.375 0v0h0a3.1 3.1 0 00-4.376 0' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgEdit
