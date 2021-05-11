import * as React from 'react'

function SvgViewMap(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12.354 6.771a.5.5 0 11-.708.707.5.5 0 01.708-.707' />
        <path d='M16.31 7.227v0c0 1.171-.52 2.28-1.419 3.03l-1.413 1.178a3.949 3.949 0 00-1.216 1.783L12 14l-.261-.783a3.954 3.954 0 00-1.216-1.783L9.11 10.256a3.942 3.942 0 01-1.419-3.03v.022C7.69 4.56 9.917 3 12 3s4.31 1.56 4.31 4.249' />
        <path d='M6.001 12a2 2 0 00-1.961 1.608l-1 5A2 2 0 005.001 21H19a2 2 0 001.961-2.392l-1-5A2 2 0 0018 12' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgViewMap
