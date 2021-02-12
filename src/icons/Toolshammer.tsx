import * as React from 'react'

function SvgToolshammer(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M18.67 6.7l-2.616-2.616h0a3.7 3.7 0 00-5.233 0L9.648 5.257h0a.462.462 0 00.327.789h.734c.49 0 .961.195 1.308.542l.766.766v1.309l1.963 1.962 1.01-.3.952.951v1.308l.562.562h0c.412.412 1.08.412 1.493 0l2.431-2.432h0a1.054 1.054 0 000-1.493l-.561-.561h-1.309l-.951-.952z' />
        <path d='M3.192 20.305v0h0a2.374 2.374 0 003.491-.146l8.063-9.534-1.963-1.962-9.464 8.166h0a2.374 2.374 0 00-.127 3.476z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgToolshammer
