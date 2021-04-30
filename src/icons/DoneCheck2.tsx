import * as React from 'react'

function SvgDoneCheck2(props: React.SVGProps<SVGSVGElement>) {
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
          d='M16 10l-5 5-3-3'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M18 20H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z'
        />
      </g>
    </svg>
  )
}

export default SvgDoneCheck2
