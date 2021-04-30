import * as React from 'react'

function SvgUserProfileAdd(props: React.SVGProps<SVGSVGElement>) {
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
          d='M17.75 5h2.5M19 6.25v-2.5M19 9a4 4 0 110-8 4 4 0 010 8M11.5 9.025a2.222 2.222 0 110 4.444 2.222 2.222 0 010-4.444M15.5 17.025a2.105 2.105 0 00-.528-.769v0a2.108 2.108 0 00-1.434-.564H9.463a2.11 2.11 0 00-1.435.564v0a2.126 2.126 0 00-.528.769'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M15.006 4.765A8.451 8.451 0 0011.5 4a8.5 8.5 0 108.5 8.5 8.451 8.451 0 00-.765-3.506'
        />
      </g>
    </svg>
  )
}

export default SvgUserProfileAdd
