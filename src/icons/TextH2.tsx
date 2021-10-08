import * as React from 'react'

function SvgTextH2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M17 14a1 1 0 011-1h.614a1.229 1.229 0 011.166.84h0a1.229 1.229 0 01-.233 1.188L17 18h3M5 6v12M13 6v12M5 12h8'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
  )
}

export default SvgTextH2
