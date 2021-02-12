import * as React from 'react'

function SvgLighthouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path fill='none' d='M0 0h24v24H0z' />
      <path
        d='M14.5 11V4.5A2.5 2.5 0 0012 2h0a2.5 2.5 0 00-2.5 2.5V11M7.5 11h9M21 21H3M12 21v-2M21 6l-2 .5M19 9.5l2 .5M3 10l2-.5M5 6.5L3 6M15.5 6h-7M16 11l.5 10M8 11l-.5 10'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgLighthouse
