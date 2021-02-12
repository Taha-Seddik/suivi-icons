import * as React from 'react'

function SvgCameraPhoto(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M14.88 10.168a3.987 3.987 0 11-5.64 5.638 3.987 3.987 0 015.64-5.638' />
        <path d='M21 9v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2l1.462-2.504A1 1 0 019.326 4h5.304c.351 0 .676.184.857.484L17 7h2a2 2 0 012 2z' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgCameraPhoto
