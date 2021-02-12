import * as React from 'react'

function SvgRecicle1(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M4.139 18.956l3.209-5.937-.596-2.819-2.852.455-2.212 4.023L5.31 21h4.792v-4.457H5.443M22.312 14.364l-2.462-4.11-3.73 2.266 2.358 4.023' />
        <path d='M22.312 14.364L18.679 21h-4.163l-2.137-2.228 2.028-2.229h6.712M12.059 5.306l-2.26 3.972-3.817-2.103L8.302 3h7.265l2.277 3.6-1.116 2.7-2.559-.564L10.641 3' />
      </g>
      <path fill='none' d='M24 24H0V0h24v24z' />
    </svg>
  )
}

export default SvgRecicle1
