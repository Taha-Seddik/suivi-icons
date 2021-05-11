import * as React from 'react'

function SvgViewCalendar(props: React.SVGProps<SVGSVGElement>) {
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
          d='M21 8H3M17.5 13h0a4.5 4.5 0 11-4.5 4.5h0a4.5 4.5 0 014.5-4.5'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M14.673 21H6h0a3 3 0 01-3-3s0 0 0 0V6h0a3 3 0 013-3h12a3 3 0 013 3v8.673'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M17.393 15.983v1.758l1.382.843M13.749 11.45h0a.049.049 0 10.049.049s0 0 0 0v0a.049.049 0 00-.049-.049M10.249 11.45h0a.048.048 0 00-.048.049h0a.049.049 0 10.048-.049M6.749 11.45h0a.048.048 0 00-.049.05h0a.049.049 0 10.048-.049M10.249 14.45h0a.048.048 0 00-.048.049h0a.049.049 0 10.048-.049M6.749 14.45h0a.048.048 0 00-.049.05h0a.049.049 0 10.048-.049M10.249 17.451h0a.048.048 0 00-.048.049h0a.049.049 0 10.048-.049M6.749 17.451h0a.048.048 0 00-.049.049h0a.049.049 0 10.048-.049'
        />
      </g>
    </svg>
  )
}

export default SvgViewCalendar
