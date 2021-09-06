import * as React from 'react'

function SvgSaveastemplate(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12.513 8H4.444C3.643 8 2.994 8.653 3 9.455l.075 10.111A1.444 1.444 0 004.519 21h10.036c.798 0 1.445-.647 1.445-1.444v-8.068c0-.383-.152-.75-.423-1.021l-2.043-2.043A1.44 1.44 0 0012.513 8z' />
        <path d='M12 8v2.823a.722.722 0 01-.722.722H7.722A.722.722 0 017 10.823V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-3M6 21v-5.071A.93.93 0 016.929 15H12a.93.93 0 01.929.929V21' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgSaveastemplate
