import * as React from 'react'

function SvgDirectionArrowRoad(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M12.414 15.232l3.493 4.979a.502.502 0 01-.514.778l-3.392-.691-3.396.691a.5.5 0 01-.512-.776l3.494-4.981a.506.506 0 01.827 0zM21 18L18 5M3 18L6 5M12 3v2M12 9v2' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgDirectionArrowRoad
