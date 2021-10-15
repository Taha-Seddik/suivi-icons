import * as React from 'react'

function SvgFolder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M24 0H0v24h24z' fill='none' />
      <path
        d='M8 21H6.5A2.5 2.5 0 014 18.5V8.372a3 3 0 01.879-2.122L7.25 3.88A3 3 0 019.372 3H16.5A2.5 2.5 0 0119 5.5V10'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M4.024 8H7.5A1.5 1.5 0 009 6.5V3.024M19.5 13.633h-2.971a1 1 0 01-.827-.438l-.516-.757A1 1 0 0014.36 12H12.5a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-4.367a1.5 1.5 0 00-1.5-1.5z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgFolder
