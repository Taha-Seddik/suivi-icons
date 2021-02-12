import * as React from 'react'

function SvgSearchLoupe(props: React.SVGProps<SVGSVGElement>) {
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
        cx={11.059}
        cy={11.059}
        r={7.059}
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
        d='M20 20l-3.95-3.95'
      />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgSearchLoupe
