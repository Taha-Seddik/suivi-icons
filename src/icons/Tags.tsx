import * as React from 'react'

function SvgTags(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M24 0H0v24h24V0z' id='tags_svg__a' />
      </defs>
      <g fill='none'>
        <use xlinkHref='#tags_svg__a' />
        <use xlinkHref='#tags_svg__a' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9.165 10.146a.367.367 0 11-.52.519.367.367 0 01.52-.52'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M11.71 6.29l7.21 7.21a1.977 1.977 0 010 2.796l-4.124 4.124a1.977 1.977 0 01-2.796 0l-7.21-7.21a.99.99 0 01-.29-.699V6.989A.99.99 0 015.489 6h5.523c.262 0 .513.104.698.29zM19.5 10l-6.506-6.423A2 2 0 0011.589 3H7.5'
        />
      </g>
    </svg>
  )
}

export default SvgTags
