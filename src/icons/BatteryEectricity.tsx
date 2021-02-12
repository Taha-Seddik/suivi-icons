import * as React from 'react'

function SvgBatteryEectricity(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M17 7V5a1 1 0 011-1h2a1 1 0 011 1v2M17 11.5v3M18.5 13h-3M8.5 13h-3M3 7V5a1 1 0 011-1h2a1 1 0 011 1v2' />
        <path d='M17 7h4a1 1 0 011 1v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a1 1 0 011-1h4l1.707-1.707A1 1 0 019.414 5h5.172c.265 0 .52.105.707.293L17 7z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBatteryEectricity
