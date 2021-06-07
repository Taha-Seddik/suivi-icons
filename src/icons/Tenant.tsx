import * as React from 'react'

function SvgTenant(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M8 21V4h0a1 1 0 011-1h6a1 1 0 011 1v17M21 21V7.913h0A.913.913 0 0020.087 7s0 0 0 0H16M8 7H3.913h0A.913.913 0 003 7.913s0 0 0 0V21M16 10h2.5M16 13h2.5M16 16h2.5M5.5 10H8M5.5 13H8M5.5 16H8M10.5 13h3M10.5 16h3M10.5 10h3M10.5 7h3M12 19v2M22 21H2' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgTenant
