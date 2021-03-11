import * as React from 'react'

function SvgPropColor(props: React.SVGProps<SVGSVGElement>) {
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
        d='M3.006 11h14.946M5 4l4 4M16.732 20.272h0a2.475 2.475 0 010-3.515h0L18.501 15l1.768 1.757a2.477 2.477 0 010 3.515h0a2.512 2.512 0 01-3.537 0zM17.707 11.406l-5.716 5.715a3 3 0 01-4.242 0l-3.87-3.87a3 3 0 010-4.242l5.715-5.716a1 1 0 011.415 0l6.698 6.698a1 1 0 010 1.415z'
      />
    </svg>
  )
}

export default SvgPropColor
