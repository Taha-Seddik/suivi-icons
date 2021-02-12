import * as React from 'react'

function SvgFileImport(props: React.SVGProps<SVGSVGElement>) {
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
          d='M20.414 2.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828M3 10V5a2 2 0 012-2h8M3 18v1a2 2 0 002 2h12a2 2 0 002-2v-9M3 14h9'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M8.409 17.599L12 14.008l-3.591-3.591'
        />
      </g>
    </svg>
  )
}

export default SvgFileImport
