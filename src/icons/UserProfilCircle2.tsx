import * as React from 'react'

function SvgUserProfilCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0z' />
        <circle
          cx={12}
          cy={12}
          r={9}
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M16 16h0a2.105 2.105 0 00-.528-.769v0h0a2.108 2.108 0 00-1.434-.564H9.963h0c-.532 0-1.045.202-1.435.564v0h0c-.23.214-.411.477-.528.769'
        />
        <circle
          cx={12}
          cy={10.25}
          r={2.25}
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
      </g>
    </svg>
  )
}

export default SvgUserProfilCircle2
