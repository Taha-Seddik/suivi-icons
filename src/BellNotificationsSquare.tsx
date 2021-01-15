import * as React from 'react'

function SvgBellNotificationsSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0V0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M7.66 15.3a.5.5 0 01-.5-.5v-1.443c0-.162.078-.313.21-.407L8.7 12V9.408v0A2.908 2.908 0 0111.608 6.5h.785a2.908 2.908 0 012.908 2.908V12l1.331.95a.5.5 0 01.209.406V14.8a.5.5 0 01-.5.5H7.66zM10.9 17.5h2.2-2.2z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M18 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3z'
        />
      </g>
    </svg>
  )
}

export default SvgBellNotificationsSquare
