import * as React from 'react'

function SvgBanana(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M16.7 8.886h0a13.93 13.93 0 01-5.549 5.865h0a13.93 13.93 0 01-6.912 1.836H4.06a1.084 1.084 0 00-.694 1.917h0a10.769 10.769 0 008.23 2.413h.004a10.769 10.769 0 005.672-2.51h0a10.769 10.769 0 003.672-9.552h0a29.155 29.155 0 01-.239-3.725V4.043a1 1 0 00-1-1h-.946a1 1 0 00-1 1v.354a10.039 10.039 0 01-1.06 4.489z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M8.87 15.79l-.31-.07a7.366 7.366 0 01-4.73-3.41 1.004 1.004 0 01.85-1.52 1.06 1.06 0 01.34.06 9.66 9.66 0 004.94.4l.3-.06a10.773 10.773 0 005.56-2.85A7.673 7.673 0 0017.7 5.5'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgBanana
