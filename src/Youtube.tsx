import * as React from 'react'

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M21.583 6.373c-.229-1.004-.907-1.796-1.769-2.068C18.255 3.818 12 3.818 12 3.818s-6.252 0-7.814.487c-.859.268-1.537 1.06-1.769 2.068C2 8.195 2 12 2 12s0 3.805.417 5.627c.229 1.004.907 1.796 1.769 2.068 1.562.487 7.814.487 7.814.487s6.255 0 7.814-.487c.859-.268 1.537-1.06 1.769-2.068C22 15.805 22 12 22 12s0-3.805-.417-5.627z' />
        <path d='M10.002 15l5.196-3-5.196-3z' />
      </g>
      <path fill='none' d='M0 24V0h24v24z' />
    </svg>
  )
}

export default SvgYoutube
