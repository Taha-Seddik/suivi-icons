import * as React from 'react'

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M16.5 3l-9 9.002L16.495 21'
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgArrowLeft
