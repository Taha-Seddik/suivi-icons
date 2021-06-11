import * as React from 'react'

function SvgUserprofile(props: React.SVGProps<SVGSVGElement>) {
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
        d='M10 15H7a4 4 0 00-4 4v1M20 21h-6M14.293 15.334l3.041-3.041a1 1 0 011.415 0l.958.958a1 1 0 010 1.415l-3.041 3.041a1 1 0 01-.708.293H14.5a.5.5 0 01-.5-.5v-1.458a1 1 0 01.293-.708z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <circle
        cx={11}
        cy={7}
        r={4}
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

export default SvgUserprofile
