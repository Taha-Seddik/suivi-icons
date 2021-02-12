import * as React from 'react'

function SvgSearch1(props: React.SVGProps<SVGSVGElement>) {
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
          d='M14.193 5.582a5.971 5.971 0 11-8.444 8.444 5.971 5.971 0 018.444-8.444M14.15 14.06L20 19.99'
        />
      </g>
    </svg>
  )
}

export default SvgSearch1
