import * as React from 'react'

function SvgMusicfile(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M17.07 21H6.93A3.93 3.93 0 013 17.07V6.93A3.93 3.93 0 016.93 3h10.14A3.93 3.93 0 0121 6.93v10.14A3.93 3.93 0 0117.07 21z' />
        <path d='M9.756 13.858a1.549 1.549 0 11-2.191 2.189 1.549 1.549 0 012.191-2.189M15.43 12.827a1.549 1.549 0 11-2.191 2.189 1.549 1.549 0 012.191-2.189' />
        <path d='M10.209 14.953V9.977c0-.422.257-.802.649-.957l3.611-1.444a1.03 1.03 0 011.414.957v5.389' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgMusicfile
