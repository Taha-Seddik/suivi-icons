import * as React from 'react'

function SvgLogout(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M3 12h11M11 9l3 3-3 3' />
        <path d='M6 9.137V7.4h0a2 2 0 011.608-1.96l11-2.406h0A2.146 2.146 0 0121 5.2V19h0a2 2 0 01-2.339 1.972l-11-1.892h0A2 2 0 016 17.108v-2.137' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgLogout
