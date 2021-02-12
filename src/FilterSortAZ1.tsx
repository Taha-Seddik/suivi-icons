import * as React from 'react'

function SvgFilterSortAZ1(props: React.SVGProps<SVGSVGElement>) {
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
          d='M17.8 21H6.2A3.2 3.2 0 013 17.8V6.2A3.2 3.2 0 016.2 3h11.6A3.2 3.2 0 0121 6.2v11.6a3.2 3.2 0 01-3.2 3.2z'
          id='filter-sort-a-z_1_svg__a'
        />
      </defs>
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <use xlinkHref='#filter-sort-a-z_1_svg__a' />
        <use xlinkHref='#filter-sort-a-z_1_svg__a' />
        <path d='M11.25 12.419l-2.375-4.75-2.375 4.75M6.919 11.581h3.912M13.937 11.581H17.5l-3.563 4.75H17.5' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgFilterSortAZ1
