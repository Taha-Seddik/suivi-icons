import * as React from 'react'

function SvgDotsMenu(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M18.5 12v0a.5.5 0 11-.5-.5h0a.5.5 0 01.5.5M12.5 12v0a.5.5 0 11-.5-.5h0a.5.5 0 01.5.5M6.5 12v0a.5.5 0 11-.5-.5h0a.5.5 0 01.5.5' />
      </g>
      <path fill='none' d='M24 0v24H0V0z' />
    </svg>
  )
}

export default SvgDotsMenu
