import * as React from 'react'

function SvgImage(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M3 7h0a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7h0a4 4 0 01-4-4s0 0 0 0z' />
        <path d='M12 16l4.586-4.586h0a2 2 0 012.828 0L21 13' />
        <circle cx={7.5} cy={7.5} r={1.5} />
        <path d='M3.353 18.644l4.23-4.23h0a2 2 0 012.828 0l6.417 6.417' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgImage
