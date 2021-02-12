import * as React from 'react'

function SvgAttachmentLink5(props: React.SVGProps<SVGSVGElement>) {
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
          d='M11 15h2a3 3 0 003-3V8a3 3 0 00-3-3H5a3 3 0 00-3 3v4a3 3 0 003 3v0'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M13 9h-2a3 3 0 00-3 3v4a3 3 0 003 3h8a3 3 0 003-3v-4a3 3 0 00-3-3v0'
        />
      </g>
    </svg>
  )
}

export default SvgAttachmentLink5
