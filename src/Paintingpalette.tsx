import * as React from 'react'

function SvgPaintingpalette(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M10.648 21h0a2 2 0 01-1.921-2.549l.258-.9h0c.052-.18.078-.365.078-.551v0a2 2 0 00-2-2H5h0a2 2 0 01-2-2s0 0 0 0v-1-.259h0A9 9 0 0112.253 3h0A9.094 9.094 0 0121 11.747v.258h0A9 9 0 0112 21z' />
        <path d='M17 11.723h0a.253.253 0 10.254.253h0a.252.252 0 00-.254-.253M12.024 6.75h0a.253.253 0 10.254.25h0a.252.252 0 00-.254-.253M8.508 8.2h0a.253.253 0 10.255.253h0a.252.252 0 00-.255-.253M15.543 15.238h0a.253.253 0 10.254.253h0a.251.251 0 00-.254-.253M15.543 8.2h0a.253.253 0 10.254.253h0a.251.251 0 00-.254-.253' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPaintingpalette
