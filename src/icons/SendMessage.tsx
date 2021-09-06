import * as React from 'react'

function SvgSendmessage(props: React.SVGProps<SVGSVGElement>) {
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
          d='M14.644 19.908L20.1 5.188a1 1 0 00-1.285-1.285L4.09 9.363c-.921.342-.849 1.668.104 1.907l6.834 1.717 1.707 6.816c.24.954 1.567 1.027 1.909.105zM19.87 4.13l-8.84 8.86'
        />
      </g>
    </svg>
  )
}

export default SvgSendmessage
