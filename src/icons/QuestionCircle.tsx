import * as React from 'react'

function SvgQuestionCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={9}
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M9.686 9.686A2.18 2.18 0 0111.9 8a2.136 2.136 0 012.25 2c0 1.504-2.15 2-2.15 3M12.125 15.75a.125.125 0 11-.125-.125M12 15.625a.125.125 0 01.125.125'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
  )
}

export default SvgQuestionCircle
