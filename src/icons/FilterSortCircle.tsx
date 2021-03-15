import * as React from 'react'

function SvgFilterSortCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0V0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M10.199 13.333v3.416a1 1 0 001.447.894l1.602-.801a1 1 0 00.553-.894v-2.615l2.31-1.782c.245-.189.389-.482.389-.792V9.25a1 1 0 00-1-1h-7a1 1 0 00-1 1v1.509c0 .31.144.602.389.792l2.31 1.782z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 21v0a9 9 0 01-9-9v0a9 9 0 019-9v0a9 9 0 019 9v0a9 9 0 01-9 9z'
        />
      </g>
    </svg>
  )
}

export default SvgFilterSortCircle
