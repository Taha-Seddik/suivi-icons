import * as React from 'react'

function SvgTelescope(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M7 21.18l4.53-6.43M18.933 3.451l1.913 4.619a1.001 1.001 0 01-.541 1.307l-.848.351a2 2 0 01-2.613-1.082l-1.148-2.772a2 2 0 011.082-2.613l.848-.351a1 1 0 011.307.541zM16.843 8.646l-1.148-2.772a1 1 0 00-1.307-.541L6.074 8.777a1 1 0 00-.541 1.307l1.148 2.772a1 1 0 001.307.541l8.315-3.444a1 1 0 00.54-1.307z' />
        <path d='M6.681 12.855l-1.148-2.772-1.848.765a1 1 0 00-.541 1.307l.383.924a1 1 0 001.307.541l1.847-.765zM14.198 12.083a1.884 1.884 0 11-2.664 2.664 1.884 1.884 0 012.664-2.664M19 21.18l-4.8-6.43' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgTelescope
