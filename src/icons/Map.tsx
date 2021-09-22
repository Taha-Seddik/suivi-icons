import * as React from 'react'

function SvgMap(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M0 0h24v24H0V0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M15 3.01V9M9 4.78V19M21 10V5.613a1 1 0 00-.684-.949l-4.684-1.561a2.007 2.007 0 00-1.268 0L9.632 4.68a1.998 1.998 0 01-1.265 0L4.316 3.33A1 1 0 003 4.279v11.339a1 1 0 00.553.895l4.553 2.276a2 2 0 001.789 0L12 17.736'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M19.192 20.719a.99.99 0 01-1.383 0C16.788 19.728 15 17.724 15 15.848a3.5 3.5 0 117 0c0 1.876-1.788 3.88-2.808 4.871z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M18.499 15.485a.26.26 0 10.002.52.26.26 0 00-.002-.52'
        />
      </g>
    </svg>
  )
}

export default SvgMap
