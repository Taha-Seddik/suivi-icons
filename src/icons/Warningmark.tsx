import * as React from 'react'

function SvgWarningmark(props: React.SVGProps<SVGSVGElement>) {
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
        d='M14.166 4.25l7.496 13.005A2.498 2.498 0 0119.497 21H4.503a2.498 2.498 0 01-2.165-3.745L9.834 4.25a2.5 2.5 0 014.332 0z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M12.433 7.787l5.456 9.463a.5.5 0 01-.433.75H6.544a.5.5 0 01-.433-.75l5.456-9.463a.5.5 0 01.866 0z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path d='M24 24H0V0h24z' fill='none' />
    </svg>
  )
}

export default SvgWarningmark
