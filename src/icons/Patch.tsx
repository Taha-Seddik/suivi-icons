import * as React from 'react'

function SvgPatch(props: React.SVGProps<SVGSVGElement>) {
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
          d='M4.575 19.896l-.471-.471a4 4 0 010-5.657l9.664-9.664a4 4 0 015.657 0l.471.471a4 4 0 010 5.657l-9.664 9.664a4 4 0 01-5.657 0zM12 5.87L18.13 12'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M10.088 11.912a.125.125 0 10-.176.177.125.125 0 00.176-.177M12.088 13.912a.125.125 0 10-.176.177.125.125 0 00.176-.177M12.088 9.912a.125.125 0 10-.176.177.125.125 0 00.176-.177M14.088 11.912a.125.125 0 10-.176.177.125.125 0 00.176-.177M12 18.13L5.87 12'
        />
      </g>
    </svg>
  )
}

export default SvgPatch
