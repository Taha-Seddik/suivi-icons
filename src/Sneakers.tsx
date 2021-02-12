import * as React from 'react'

function SvgSneakers(props: React.SVGProps<SVGSVGElement>) {
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
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9.911 7.345H12l1.628-.992h0a1 1 0 011.469.538L17.4 13.8l3.24 4.32h0A1.8 1.8 0 0119.2 21h-3.93 0a3.994 3.994 0 01-2.929-1.276L3.8 10.531h0a3 3 0 01.247-4.317L7.47 3.281h0a1.159 1.159 0 011.913.88v3.184H12M3 17.5h2M8 21H3'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M20.547 18h-5.024 0a2.981 2.981 0 01-2.194-.954L3.655 6.628M13 13l3.91-.68M12 10.5l4.06-.7'
        />
      </g>
    </svg>
  )
}

export default SvgSneakers
