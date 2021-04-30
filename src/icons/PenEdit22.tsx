import * as React from 'react'

function SvgPenEdit22(props: React.SVGProps<SVGSVGElement>) {
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
          d='M3 18.38l9.19-9.19a.999.999 0 011.414 0l1.206 1.206a.999.999 0 010 1.414L5.62 21H3v-2.62zM13.203 13.424l-2.62-2.63'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M3 13V6.375A3.375 3.375 0 016.375 3h11.25A3.375 3.375 0 0121 6.375v11.25A3.375 3.375 0 0117.625 21H11'
        />
      </g>
    </svg>
  )
}

export default SvgPenEdit22
