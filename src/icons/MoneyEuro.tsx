import * as React from 'react'

function SvgMoneyEuro(props: React.SVGProps<SVGSVGElement>) {
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
          d='M9.255 12.001h3.493M13.891 14.655a2.885 2.885 0 01-3.2-.597 2.91 2.91 0 010-4.117 2.886 2.886 0 013.2-.597'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M19.804 18.213v0a17.256 17.256 0 00-7.567.18l-.237.06a18.334 18.334 0 01-8.043.191l-.153-.031a1 1 0 01-.804-.98V6.794a1 1 0 011.196-.981v0c2.505.501 5.089.439 7.567-.18l.473-.118a17.257 17.257 0 017.567-.18l.392.078a1 1 0 01.805.981v10.839a1 1 0 01-1.196.98z'
        />
      </g>
    </svg>
  )
}

export default SvgMoneyEuro
