import * as React from 'react'

function SvgViewTable(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <g data-name='Calque 2'>
        <path
          d='M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm3.5 5v2.25H8.75V1.5H19A3.5 3.5 0 0122.5 5zm0 3.75v5.5H8.75v-5.5zM1.5 5A3.5 3.5 0 015 1.5h2.25v5.75H1.5zm0 3.75h5.75v5.5H1.5zM5 22.5A3.5 3.5 0 011.5 19v-3.25h5.75v6.75zm14 0H8.75v-6.75H22.5V19a3.5 3.5 0 01-3.5 3.5z'
          fill='currentColor'
          data-name='Calque 1'
        />
      </g>
    </svg>
  )
}

export default SvgViewTable
