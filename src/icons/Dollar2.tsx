import * as React from 'react'

function SvgDollar2(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12 6v1.5M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636M12 18v-1.5' />
        <path d='M9 14.255v0a2.25 2.25 0 002.25 2.25h1.643A2.107 2.107 0 0015 14.398v0c0-.966-.657-1.808-1.594-2.043l-2.812-.705A2.106 2.106 0 019 9.607v0C9 8.443 9.943 7.5 11.107 7.5h1.643A2.25 2.25 0 0115 9.75v0' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgDollar2
