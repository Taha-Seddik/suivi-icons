import * as React from 'react'

function SvgPropTags(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M6 13h6M6 17h6M18.999 5.775a.225.225 0 10.003.45.225.225 0 00-.003-.45M2 19a2 2 0 002 2h10a2 2 0 002-2V3H4a2 2 0 00-2 2v14z' />
        <path d='M16 3h4a2 2 0 012 2v2a2 2 0 01-2 2H2' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPropTags
