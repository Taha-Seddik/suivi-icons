import * as React from 'react'

function SvgCopyPasteSelectAddPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M24 24H0V0h24v24z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M7 15H5a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v2'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M13 19H9a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v4M19 17v4M17 19h4'
        />
      </g>
    </svg>
  )
}

export default SvgCopyPasteSelectAddPlus
