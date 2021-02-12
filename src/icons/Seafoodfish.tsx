import * as React from 'react'

function SvgSeafoodfish(props: React.SVGProps<SVGSVGElement>) {
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
          d='M4.857 3H7a9 9 0 019 9v3.342a.658.658 0 01-.658.658H12h0a9 9 0 01-9-9V4.857h0C3 3.831 3.831 3 4.857 3c0 0 0 0 0 0z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M6.141 6.134h0a.06.06 0 10.06.06h0a.06.06 0 00-.06-.06M9.5 6.493v0a3 3 0 01-3 3v0M12.286 4.727h3.085c.429 0 .84.17 1.143.473v0h0a1.616 1.616 0 010 2.286L15.349 8.65M4.727 12.286v3.085h0c0 .429.17.84.473 1.143v0h0a1.616 1.616 0 002.286 0l1.165-1.165M18.21 18.21h.544c.842 0 1.65-.335 2.246-.931v0h0a3.332 3.332 0 00-3.815-2.214v0h0a2.702 2.702 0 00-2.12 2.12v0h0A3.332 3.332 0 0017.28 21v0h0c.596-.596.93-1.404.93-2.246z'
        />
      </g>
    </svg>
  )
}

export default SvgSeafoodfish
