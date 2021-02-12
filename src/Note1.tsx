import * as React from 'react'

function SvgNote1(props: React.SVGProps<SVGSVGElement>) {
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
          d='M8.5 17.781V7.964c0-.415.256-.787.644-.934l8.5-3.238A1 1 0 0119 4.726v11.049'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M18.268 14.007a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536M7.768 16.007a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536'
        />
      </g>
    </svg>
  )
}

export default SvgNote1
