import * as React from 'react'

function SvgHexagonube(props: React.SVGProps<SVGSVGElement>) {
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
          d='M4 8l8-5 8 5v8l-8 5-8-5V8l8 4.375V21v-8.625L20 8'
        />
      </g>
    </svg>
  )
}

export default SvgHexagonube
