import * as React from 'react'

function SvgFloppySave1(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M19 21H5.1v-.001c-1.1 0-2-.89-2-1.99l-.11-14-.01-.01a2 2 0 011.98-2.02c0-.01 0-.01.01-.01h11.17v-.001c.53-.01 1.03.21 1.41.58l2.82 2.82-.01-.01c.37.37.58.88.58 1.41v11.17h0c0 1.1-.9 1.99-2 1.99-.01 0-.01-.01-.01-.01z' />
        <path d='M15.993 3v4-.01c-.01.55-.45.99-1 1h-6l-.01-.001c-.56-.01-1-.45-1-1v-4M12 12a2.5 2.5 0 100 5 2.5 2.5 0 100-5z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgFloppySave1
