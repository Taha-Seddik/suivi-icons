import * as React from 'react'

function SvgMessagesChat5(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M12 18h6a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h1.5v3l4.5-3z'
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      />
      <path fill='none' d='M24 24H0V0h24v24z' />
    </svg>
  )
}

export default SvgMessagesChat5
