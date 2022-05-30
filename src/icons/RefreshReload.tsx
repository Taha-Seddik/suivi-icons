import * as React from 'react'

function SvgRefreshReload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M24 0v24H0V0h24z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M4.406 4.424h2.387v2.389'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M6.793 4.668A8.98 8.98 0 003 12a9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9c-.539 0-1.064.056-1.576.147'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12.001 8.264a3 3 0 00-3 3 2 2 0 100 4h5.5a2.5 2.5 0 002.5-2.5c0-1.265-.943-2.3-2.162-2.466a3.001 3.001 0 00-2.838-2.034z'
        />
      </g>
    </svg>
  )
}

export default SvgRefreshReload
