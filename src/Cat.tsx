import * as React from 'react'

function SvgCat(props: React.SVGProps<SVGSVGElement>) {
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
        d='M15.074 6.42l2.389-2.047A1.537 1.537 0 0120 5.54V13a8 8 0 01-8 8h0a8 8 0 01-8-8V5.54a1.537 1.537 0 012.537-1.167l2.389 2.046a9.223 9.223 0 016.148 0z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M10.25 10.75a.25.25 0 11-.25-.25.25.25 0 01.25.25M14.25 10.75a.25.25 0 11-.25-.25.25.25 0 01.25.25M12 14.5h0a.5.5 0 01-.5-.5h0a.167.167 0 01.167-.167h.666A.167.167 0 0112.5 14h0a.5.5 0 01-.5.5zM9.813 17.125a1.277 1.277 0 00.906.375h0A1.281 1.281 0 0012 16.219a1.281 1.281 0 002.187.906M12 14.5v1.719M17 12.807l4-.667M21 16l-4-.667M7 12.807l-4-.667M3 16l4-.667'
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

export default SvgCat
