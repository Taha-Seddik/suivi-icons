import * as React from 'react'

function SvgPublic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M12 21a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9M3.51 9h16.98'
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      />
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M3.51 15H14M16 12c0-2.764-.723-5.528-2.167-7.94a2.114 2.114 0 00-3.665 0c-2.89 4.825-2.89 11.056 0 15.881A2.122 2.122 0 0012 21M20.775 20.55a.226.226 0 00-.225.225.224.224 0 10.449 0 .223.223 0 00-.224-.225M21 18c-1.756.039-2.961 1.244-3 3M15 21a6.58 6.58 0 01.367-2.121 5.687 5.687 0 013.513-3.513A6.596 6.596 0 0121 15' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgPublic
