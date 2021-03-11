import * as React from 'react'

function SvgPropMultilineText(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M5.5 10h3M7 4v6M10 5.358V4.333A.333.333 0 009.667 4H4.333A.333.333 0 004 4.333v1.025M4 14v4a2 2 0 002 2h13a2 2 0 002-2V6a2 2 0 00-2-2h-5M8 16h9M12 12h5M13 8h4' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgPropMultilineText
