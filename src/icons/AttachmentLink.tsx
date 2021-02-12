import * as React from 'react'

function SvgAttachmentLink(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M15.964 6.036a3.535 3.535 0 015 0v0a3.535 3.535 0 010 5l-5.879 5.879a3.535 3.535 0 01-5 0v0a3.535 3.535 0 010-5l.879-.879' />
        <path d='M8.036 18.964a3.535 3.535 0 01-5 0v0a3.535 3.535 0 010-5l5.879-5.879a3.535 3.535 0 015 0v0a3.535 3.535 0 010 5L13 14' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgAttachmentLink
