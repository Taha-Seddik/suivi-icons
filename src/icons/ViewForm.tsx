import * as React from 'react'

function SvgViewForm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <style>{'.view-form_svg__cls-1{fill:#323232}'}</style>
      </defs>
      <g id='view-form_svg__Calque_2' data-name='Calque 2'>
        <g id='view-form_svg__Calque_1-2' data-name='Calque 1'>
          <path
            className='view-form_svg__cls-1'
            d='M19 1.5A3.5 3.5 0 0122.5 5v14a3.5 3.5 0 01-3.5 3.5H5A3.5 3.5 0 011.5 19V5A3.5 3.5 0 015 1.5h14M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5z'
          />
          <rect
            className='view-form_svg__cls-1'
            x={12}
            y={3.25}
            width={8}
            height={1.5}
            rx={0.75}
          />
          <rect
            className='view-form_svg__cls-1'
            x={12}
            y={6.25}
            width={8}
            height={1.5}
            rx={0.75}
          />
          <rect
            className='view-form_svg__cls-1'
            x={14}
            y={9.25}
            width={6}
            height={1.5}
            rx={0.75}
          />
          <path
            className='view-form_svg__cls-1'
            d='M7.5 4.5v1.76H5.74V4.5H7.5M8 3H5.24a1 1 0 00-1 1v2.76a1 1 0 001 1H8a1 1 0 001-1V4a1 1 0 00-1-1zM7.5 11.28V13H5.74v-1.72H7.5m.5-1.5H5.24a1 1 0 00-1 1v2.76a1 1 0 001 1H8a1 1 0 001-1v-2.76a1 1 0 00-1-1zM7.5 18.07v1.75H5.74v-1.75H7.5m.5-1.5H5.24a1 1 0 00-1 1v2.75a1 1 0 001 1H8a1 1 0 001-1v-2.75a1 1 0 00-1-1zM16.7 20.75a.83.83 0 01-.6-.25l-1.74-1.74-.51.51a.94.94 0 01-.85.21.82.82 0 01-.58-.64l-1.11-5.53a1 1 0 01.23-.77.87.87 0 01.77-.23l5.53 1.11a.93.93 0 01.64.58.86.86 0 01-.21.85l-.51.51 1.74 1.74a.85.85 0 010 1.2l-2.2 2.2a.83.83 0 01-.6.25zM14.36 17a.84.84 0 01.59.24L16.7 19l1.3-1.3-1.76-1.7a.85.85 0 010-1.2l.11-.11L13 14l.67 3.37.11-.11a.83.83 0 01.58-.26zm-1.58-4z'
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgViewForm
