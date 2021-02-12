import * as React from 'react'

function SvgBeachUmbrella(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M20 21H4M14.905 3.666v0a8.359 8.359 0 014.774 9.982l-.075.265a1.995 1.995 0 01-2.699 1.291L5.217 10.242a1.995 1.995 0 01-.946-2.839l.138-.239a8.36 8.36 0 0110.496-3.498z' />
        <path d='M14.905 3.666l.259 1.047c.769 3.115.094 6.41-1.839 8.971v0M14.905 3.666l-.933.541a10.654 10.654 0 00-5.176 7.555v0M11.06 12.72L7.55 21' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBeachUmbrella
