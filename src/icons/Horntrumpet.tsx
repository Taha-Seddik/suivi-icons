import * as React from 'react'

function SvgHorntrumpet(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M13.998 15L7 14.998c-2.209 0-4-1.792-4-4.002v-.997a4 4 0 014.001-4.001h6.998l3.872-2.646C19.199 2.445 21 3.396 21 5.004v10.992c0 1.608-1.802 2.559-3.129 1.651L13.998 15zM14 6v9' />
        <path d='M6 15l1.529 3.858c.273.69.935 1.142 1.67 1.142v0c1.271 0 2.141-1.294 1.672-2.487L9.882 15' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgHorntrumpet
