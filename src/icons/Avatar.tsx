import * as React from 'react'

function SvgAvatar(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z' />
        <path d='M14.121 7.879A3 3 0 119.88 12.12 3 3 0 0114.12 7.88M6 21l.357-1.784A4 4 0 0110.279 16h3.442a4 4 0 013.922 3.216L18 21' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgAvatar
