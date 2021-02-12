import * as React from 'react'

function SvgArrow2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M8 10l4 4 4-4'
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

export default SvgArrow2
