import * as React from 'react'

function SvgBroom(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M8.5 22v-2M15.5 22v-2M16.765 22h-9.53 0a2 2 0 01-1.988-2.221l.358-3.221h0A4 4 0 019.58 13h4.84a4 4 0 013.98 3.558l.358 3.221h0A2 2 0 0116.765 22zM12 2v0h0a1.5 1.5 0 011.5 1.5v6a.5.5 0 01-.5.5h-2 0a.5.5 0 01-.5-.5s0 0 0 0v-6h0A1.5 1.5 0 0112 2z' />
        <path d='M14.25 13h-4.5 0a1 1 0 01-.923-1.385l.417-1h0a1 1 0 01.923-.615h3.666a1 1 0 01.923.615l.417 1h0A1 1 0 0114.25 13zM12 22v-2' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBroom
