import * as React from 'react'

function SvgPin(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12 21v-5.5M14.9 10.5H9.1h0a3 3 0 00-2.914 2.289l-.133.546h0a1.75 1.75 0 001.7 2.165h8.5a1.75 1.75 0 001.7-2.165l-.133-.546h0A3 3 0 0014.9 10.5z' />
        <path d='M14.75 10.5l-.65-3.9h0a1 1 0 01.386-.965L15.6 4.8h0A1 1 0 0015 3H9h0a1 1 0 00-.6 1.8l1.114.835h0A1 1 0 019.9 6.6l-.65 3.9' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPin
