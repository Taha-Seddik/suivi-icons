import * as React from 'react'

function SvgPinlocation(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M6 13.153c-1.837.824-3 2.016-3 3.347 0 2.485 4.029 4.5 9 4.5s9-2.015 9-4.5c0-1.331-1.163-2.523-3-3.347' />
        <path d='M15.652 17h0A6.214 6.214 0 0112 18h0a6.214 6.214 0 01-3.652-1M14.2 3.913h0a3.117 3.117 0 11-4.408 0h0a3.116 3.116 0 014.408 0M12 9.232V15' />
      </g>
      <path fill='none' d='M24 0v24H0V0z' />
    </svg>
  )
}

export default SvgPinlocation
