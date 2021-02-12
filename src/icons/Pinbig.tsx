import * as React from 'react'

function SvgPinbig(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M5 20l4.32-4.32M11.33 9.5l2.37-2.38h-.01c.25-.26.38-.61.34-.97l-.18-1.52-.01-.01a.588.588 0 01.99-.5l5.94 5.94h0c.23.22.23.6 0 .83a.59.59 0 01-.49.16l-1.52-.18h0c-.36-.04-.72.09-.97.34l-2.38 2.37h-.01c-.23.21-.35.51-.35.83v4.16h-.01a1.18 1.18 0 01-1.18 1.17c-.32-.01-.61-.13-.83-.35L5.4 11.756h0c-.46-.47-.46-1.21 0-1.67.22-.22.51-.35.82-.35h4.16-.01c.31-.01.6-.13.82-.35z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPinbig
