import * as React from 'react'

function SvgViewZones(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <style>{'.view-zones_svg__cls-1{fill:#323232}'}</style>
      </defs>
      <g id='view-zones_svg__Calque_2' data-name='Calque 2'>
        <g id='view-zones_svg__Calque_1-2' data-name='Calque 1'>
          <path
            className='view-zones_svg__cls-1'
            d='M22.28 16l-2.12-8.38A2 2 0 0021 6a2 2 0 00-2-2 2 2 0 00-1.62.84L7 1.76a2 2 0 10-3.18 1.85l-2.45 16.5A2 2 0 104 22.37l16.33-3.27a2 2 0 102-3.07zM20 17.63L3.67 20.9a2 2 0 00-.79-.69L5.28 4a1.94 1.94 0 001.3-.76L17 6.3A2 2 0 0018.7 8l2.12 8.42a2 2 0 00-.82 1.21z'
          />
          <path
            className='view-zones_svg__cls-1'
            d='M11 14.74a.76.76 0 01-.75.75h-1a3.11 3.11 0 010-6.21h1.05a.75.75 0 01.7.72.76.76 0 01-.75.75h-1a1.61 1.61 0 000 3.21h1a.76.76 0 01.75.75zM13 14.74a.76.76 0 01.75-.75h1a1.6 1.6 0 001.49-1.61 1.62 1.62 0 00-1.53-1.61h-1A.74.74 0 0113 10a.75.75 0 01.75-.75h1a3.11 3.11 0 010 6.21h-1a.76.76 0 01-.75-.72z'
          />
          <rect
            className='view-zones_svg__cls-1'
            x={9.37}
            y={11.69}
            width={5.63}
            height={1.5}
            rx={0.75}
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgViewZones
