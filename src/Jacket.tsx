import * as React from 'react'

function SvgJacket(props: React.SVGProps<SVGSVGElement>) {
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
          d='M12.667 6.889l2.384.795h0a1 1 0 001.265-.633L17 5M7 5l.684 2.051h0a1 1 0 001.265.633l2.384-.795M17 5l-1.414-1.414h0A2 2 0 0014.172 3H9.828h0a2 2 0 00-1.414.586L7 5M12 8v14M17.988 13v6.543h0c.01.898-.588 1.69-1.454 1.926h0c-2.99.708-6.103.708-9.093 0h0a1.974 1.974 0 01-1.454-1.926V12'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9.079 3.131L12 8l2.921-4.869M17 5l1.931.666h0a2 2 0 011.263 1.313l1.635 5.419h0a4 4 0 01.17 1.231l-.082 4.39h0a1 1 0 01-1 .981H18M7 5l-1.931.666h0A2 2 0 003.806 6.98l-1.635 5.419h0A4 4 0 002 13.629l.082 4.39h0a1 1 0 001 .981H6'
        />
      </g>
      <path fill='none' d='M24 24H0V0h24z' />
    </svg>
  )
}

export default SvgJacket
