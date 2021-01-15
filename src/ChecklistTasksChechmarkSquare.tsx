import * as React from 'react'

function SvgChecklistTasksChechmarkSquare(
  props: React.SVGProps<SVGSVGElement>
) {
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
        d='M12.952 15.042h4'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={5}
        fill='none'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M6.952 14.768l.919.828 1.851-1.666M12.952 10.042h4M6.952 9.768l.919.828 1.85-1.666'
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

export default SvgChecklistTasksChechmarkSquare
