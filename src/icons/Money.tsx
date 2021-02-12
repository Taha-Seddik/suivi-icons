import * as React from 'react'

function SvgMoney(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0V0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M13.999 5C14 3.895 11.76 3 9 3s-4.998.896-5 2c0 1.105 2.238 2 5 2s5-.895 5-2M14 5v7.76M4.001 9c0 1.105 2.238 2 5 2s5-.895 5-2M19.682 13.318a4.5 4.5 0 11-6.366 6.364 4.5 4.5 0 016.366-6.364'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12.505 14.425C11.603 14.78 10.366 15 9 15c-2.761 0-4.999-.895-4.999-2'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12.445 18.444C11.548 18.787 10.339 19 9 19c-2.761 0-4.999-.895-5-2V5'
        />
      </g>
    </svg>
  )
}

export default SvgMoney
