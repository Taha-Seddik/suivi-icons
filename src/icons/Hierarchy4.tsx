import * as React from 'react'

function SvgHierarchy4(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <circle
        cx={6.5}
        cy={5.5}
        r={2.5}
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <circle
        cx={17.5}
        cy={5.5}
        r={2.5}
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <circle
        cx={6.5}
        cy={18.5}
        r={2.5}
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M6.5 8v8M6.5 16v-2A2.5 2.5 0 019 11.5h6A2.5 2.5 0 0017.5 9V8'
      />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgHierarchy4
