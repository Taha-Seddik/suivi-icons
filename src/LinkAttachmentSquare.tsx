import * as React from 'react'

function SvgLinkAttachmentSquare(props: React.SVGProps<SVGSVGElement>) {
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
        <rect width={18} height={18} x={3} y={3} rx={2.761} ry={0} />
        <path d='M11.064 12.936h0a2.847 2.847 0 003.745 0l.935-.936v0h0A2.648 2.648 0 0012 8.256' />
        <path d='M12.936 11.064h0a2.847 2.847 0 00-3.745 0L8.256 12v0h0A2.648 2.648 0 0012 15.744' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgLinkAttachmentSquare
