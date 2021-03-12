import * as React from 'react'

function SvgPropUrlNavbutton(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M15.969 4.577h0A5.6 5.6 0 0011 10.137v.354h0a6.6 6.6 0 014.969-2.384v1.868h0a.708.708 0 001.146.556l4.625-3.653h0a.682.682 0 000-1.072l-4.625-3.652h0a.707.707 0 00-1.146.555z' />
        <path d='M21 12v4a5 5 0 01-5 5H8h0a5 5 0 01-5-5s0 0 0 0V8h0a5 5 0 015-5h3' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPropUrlNavbutton
