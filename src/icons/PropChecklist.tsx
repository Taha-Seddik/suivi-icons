import * as React from 'react'

function SvgPropChecklist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M3 18l1.22 1.1 2.468-2.23M3 12l1.22 1.1 2.46-2.23M11 18.5h10M11 12.5h10M3 6l1.22 1.104 2.46-2.23M11 6.5h10' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPropChecklist
