import * as React from 'react'

function SvgEarthHomeWorld22(props: React.SVGProps<SVGSVGElement>) {
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
          d='M12 3.1c4.667 4.927 4.667 12.873 0 17.8M12 20.9C7.333 15.973 7.333 8.027 12 3.1'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 3c4.982 0 9 4.018 9 9s-4.018 9-9 9M12 21c-4.982 0-9-4.018-9-9s4.018-9 9-9M3.51 9h16.98M3.51 15h16.98'
        />
      </g>
    </svg>
  )
}

export default SvgEarthHomeWorld22
