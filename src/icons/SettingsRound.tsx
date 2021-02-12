import * as React from 'react'

function SvgSettingsRound(props: React.SVGProps<SVGSVGElement>) {
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
        d='M9.654 18.634l.526 1.183A1.991 1.991 0 0012 21h0a1.991 1.991 0 001.82-1.183l.526-1.183a2.183 2.183 0 01.9-1h0a2.19 2.19 0 011.323-.281l1.287.137a1.991 1.991 0 001.934-.985h0a1.99 1.99 0 00-.114-2.167l-.762-1.047A2.186 2.186 0 0118.5 12h0a2.186 2.186 0 01.418-1.286l.762-1.047a1.99 1.99 0 00.114-2.167h0a1.991 1.991 0 00-1.934-.985l-1.287.137a2.19 2.19 0 01-1.323-.281h0a2.183 2.183 0 01-.9-1.005l-.53-1.183A1.991 1.991 0 0012 3h0a1.991 1.991 0 00-1.82 1.183l-.526 1.183a2.183 2.183 0 01-.9 1.005h0a2.19 2.19 0 01-1.323.281L6.14 6.515a1.991 1.991 0 00-1.934.985h0a1.99 1.99 0 00.114 2.167l.762 1.047A2.186 2.186 0 015.5 12h0a2.186 2.186 0 01-.418 1.286l-.762 1.047a1.99 1.99 0 00-.114 2.167h0a1.993 1.993 0 001.934.985l1.287-.137a2.19 2.19 0 011.323.281h0a2.183 2.183 0 01.904 1.005z'
        fill='none'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <circle
        cx={12}
        cy={12}
        r={2.647}
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

export default SvgSettingsRound
