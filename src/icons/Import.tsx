import * as React from 'react'

function SvgImport(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M10 21h4M10 3h4M3 10v4M21 10v4M7 21h0a4 4 0 01-4-4h0'
      />
      <path
        d='M7 21h0a4 4 0 01-4-4h0M17 3h0a4 4 0 014 4h0M3 7h0a4 4 0 014-4h0M21 17h0a4 4 0 01-4 4h0M9.5 11.5L12 9l2.5 2.5M12 9v6'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgImport
