import * as React from 'react'

function SvgFiledownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 24h24V0H0z' fill='none' />
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        d='M13 21h4a3 3 0 003-3V8.51a3 3 0 00-.879-2.122l-2.509-2.51A3 3 0 0014.491 3H7a3 3 0 00-3 3v7'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M20 8.5h-3.5a2 2 0 01-2-2V3M7 16v5M9 19l-2 2M5 19l2 2'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgFiledownload
