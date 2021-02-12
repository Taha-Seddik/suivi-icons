import * as React from 'react'

function SvgSettings1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <path
          d='M10.324 3.732a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536'
          id='Settings1_svg__a'
        />
      </defs>
      <g fill='none'>
        <path d='M0 0h24v24H0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M3 5.5h3.07'
        />
        <use
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          xlinkHref='#Settings1_svg__a'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M11.06 5.5H21'
        />
        <use
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          xlinkHref='#Settings1_svg__a'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M21 12h-3.06M12.94 12H3M17.212 10.232a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536M11.06 18.5H21M3 18.5h3.06M10.324 16.732a2.5 2.5 0 11-3.536 3.536 2.5 2.5 0 013.536-3.536'
        />
      </g>
    </svg>
  )
}

export default SvgSettings1
