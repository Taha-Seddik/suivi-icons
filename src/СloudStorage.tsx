import * as React from 'react'

function SvgLoudStorage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M6.324 9.068C3.885 9.401 2 11.47 2 14a5 5 0 005 5h11a4 4 0 000-8A5.997 5.997 0 006.324 9.068z'
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgLoudStorage
