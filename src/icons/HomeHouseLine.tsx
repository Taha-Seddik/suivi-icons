import * as React from 'react'

function SvgHomeHouseLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g strokeWidth={1.5} fill='none' stroke='currentColor'>
        <path d='M19.842 8.299l-6-4.667a3 3 0 00-3.684 0l-6 4.667A2.998 2.998 0 003 10.667V18a3 3 0 003 3h12a3 3 0 003-3v-7.333c0-.926-.427-1.8-1.158-2.368z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 17h6' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgHomeHouseLine
