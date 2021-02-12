import * as React from 'react'

function SvgFlashlight(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M10.443 9.495l-6.77 6.77h0a2.3 2.3 0 000 3.25l.812.812h0a2.3 2.3 0 003.25 0l6.77-6.77h0a2.3 2.3 0 011.3-.65l1.327-.189h0a2.3 2.3 0 001.3-.65l1.9-1.9h0a2.3 2.3 0 000-3.249l-3.25-3.25h0a2.3 2.3 0 00-3.249 0l-1.9 1.9h0a2.3 2.3 0 00-.65 1.3l-.19 1.331h0a2.3 2.3 0 01-.65 1.295zM11 13l1.5-1.5M18.7 11.8l-6.5-6.5' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgFlashlight
