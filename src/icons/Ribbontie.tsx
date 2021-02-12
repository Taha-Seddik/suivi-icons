import * as React from 'react'

function SvgRibbontie(props: React.SVGProps<SVGSVGElement>) {
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
          d='M9.95 14.618l-4.38 2.19h0a1.833 1.833 0 01-2.361-.656h0a7.735 7.735 0 010-8.303h0a1.833 1.833 0 012.362-.657l4.38 2.19M7.09 12h1.92'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9.727 14.365h0c-.96-1.43-.96-3.3 0-4.73h0c.28-.403.742-.64 1.233-.635h2.08c.491-.005.953.232 1.233.635h0c.96 1.43.96 3.3 0 4.73h0c-.28.403-.742.64-1.233.635h-2.08 0a1.482 1.482 0 01-1.233-.635z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M14.05 9.382l4.38-2.19h0a1.833 1.833 0 012.361.656h0a7.735 7.735 0 010 8.303h0a1.833 1.833 0 01-2.362.657l-4.38-2.19M16.91 12h-1.92'
        />
      </g>
    </svg>
  )
}

export default SvgRibbontie
