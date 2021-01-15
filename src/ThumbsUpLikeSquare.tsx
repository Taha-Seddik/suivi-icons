import * as React from 'react'

function SvgThumbsUpLikeSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        d='M8 10.334h1.857V16h0H8a1 1 0 01-1-1v-3.666a1 1 0 011-1zM9.857 10.334l1.472-2.822a.952.952 0 011.27-.411l.015.007a1.905 1.905 0 011.053 1.704v1.474h1.904a1.429 1.429 0 011.395 1.735l-.629 2.858A1.429 1.429 0 0114.942 16H9.857'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={5}
        strokeWidth={1.5}
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  )
}

export default SvgThumbsUpLikeSquare
