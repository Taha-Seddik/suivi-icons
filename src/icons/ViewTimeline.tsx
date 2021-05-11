import * as React from 'react'

function SvgViewTimeline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 23.96'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <style>{'.view-timeline_svg__cls-1{fill:#323232}'}</style>
      </defs>
      <g id='view-timeline_svg__Calque_2' data-name='Calque 2'>
        <g id='view-timeline_svg__Calque_1-2' data-name='Calque 1'>
          <path
            className='view-timeline_svg__cls-1'
            d='M16.64 1.5a1.86 1.86 0 010 3.72H3.36a1.86 1.86 0 010-3.72h13.28m0-1.5H3.36a3.36 3.36 0 000 6.72h13.28a3.36 3.36 0 000-6.72zM20.64 10.14a1.86 1.86 0 010 3.72H9.36a1.86 1.86 0 010-3.72h11.28m0-1.5H9.36a3.36 3.36 0 000 6.72h11.28a3.36 3.36 0 000-6.72zM11.64 18.74a1.86 1.86 0 110 3.72H3.36a1.86 1.86 0 110-3.72h8.28m0-1.5H3.36A3.35 3.35 0 000 20.6 3.35 3.35 0 003.36 24h8.28A3.35 3.35 0 0015 20.6a3.35 3.35 0 00-3.36-3.36z'
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgViewTimeline
