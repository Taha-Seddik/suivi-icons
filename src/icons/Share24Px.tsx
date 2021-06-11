import * as React from 'react'

function SvgShare24Px(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 18 18'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M-1-1h20v20H-1z' />
        <path d='M-1-1h20v20H-1z' />
        <path
          d='M13.167 1.5H14A2.5 2.5 0 0116.5 4v10a2.5 2.5 0 01-2.5 2.5H4A2.5 2.5 0 011.5 14v-.845'
          stroke='#828B9D'
          strokeWidth={1.25}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.333 3.698C4.146 3.698 1.5 5.324 1.5 9.123v.763c1.078-2.495 3.317-2.75 5.833-2.75v1.572c0 .543.644.828 1.045.464l3.75-3.4a.625.625 0 00-.015-.94L8.363 1.65a.625.625 0 00-1.03.476v1.572h0z'
          stroke='#828B9D'
          strokeWidth={1.25}
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export default SvgShare24Px
