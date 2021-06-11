import * as React from 'react'

function SvgMessage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M0 0h16v16H0z' />
        <path d='M0 0h16v16H0z' />
        <g opacity={0.5}>
          <path d='M-2-2h20v20H-2z' />
          <g
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='#828B9D'
            strokeWidth={1.2}
          >
            <path d='M6.592 8.475l.746 3.357c.092.418.649.508.869.14l3.475-5.791a.474.474 0 00-.407-.718h-6.55a.474.474 0 00-.335.81l2.202 2.202zM11.683 5.697L6.592 8.472' />
            <path d='M15.5 3.833v8.334a3.333 3.333 0 01-3.333 3.333H3.833A3.333 3.333 0 01.5 12.167V3.833A3.333 3.333 0 013.833.5h8.334A3.333 3.333 0 0115.5 3.833z' />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default SvgMessage
