import * as React from 'react'

function SvgCoffeecup(props: React.SVGProps<SVGSVGElement>) {
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
        d='M4 10.5h12a1 1 0 011 1v3a6 6 0 01-6 6H9a6 6 0 01-6-6v-3a1 1 0 011-1zM13.5 7.5a1.813 1.813 0 010-2.5 1.812 1.812 0 000-2.5M10 7.5A1.813 1.813 0 0110 5a1.813 1.813 0 000-2.5M6.5 7.5a1.812 1.812 0 010-2.5 1.813 1.813 0 000-2.5'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M16.128 17.615l1.846-.422A3.895 3.895 0 0021 13.395h0a2.895 2.895 0 00-2.895-2.895H15.5'
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

export default SvgCoffeecup
