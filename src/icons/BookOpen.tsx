import * as React from 'react'

function SvgBookOpen(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M17 5.317a20.42 20.42 0 012.956-.3A1.005 1.005 0 0121 6.016v11.837c0 .542-.433.99-.974.998-3.092.047-5.42.617-8.026 2.149-2.606-1.532-4.934-2.102-8.026-2.148A.996.996 0 013 17.853V6.016a.995.995 0 011.017-1c3.071.099 5.389.677 7.983 2.13' />
        <path d='M17 15.238V3.012c0-.729-.766-1.238-1.417-.911-1.756.88-3.236 2.669-3.583 4.511V21c.396-2.099 2.261-4.129 4.331-4.824a.987.987 0 00.669-.938z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBookOpen
