import * as React from 'react'

function SvgAnchor(props: React.SVGProps<SVGSVGElement>) {
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
          d='M13.697 4.703a2.4 2.4 0 11-3.394 3.394 2.4 2.4 0 013.394-3.394M12 20V8.8M6.4 12H4a8 8 0 0016 0h-2.4'
        />
      </g>
    </svg>
  )
}

export default SvgAnchor
