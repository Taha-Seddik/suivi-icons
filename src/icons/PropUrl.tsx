import * as React from 'react'

function SvgPropUrl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M17.445 12.778l2.333-2.333a4.401 4.401 0 000-6.223v0a4.401 4.401 0 00-6.223 0l-2.333 2.333M8.89 15.11l6.22-6.22M6.555 11.222l-2.333 2.333a4.401 4.401 0 000 6.223v0a4.401 4.401 0 006.223 0l2.333-2.333'
        />
      </g>
    </svg>
  )
}

export default SvgPropUrl
