import * as React from 'react'

function SvgViewGantt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <style>{'.view-gantt_svg__cls-1{fill:#323232}'}</style>
      </defs>
      <g id='view-gantt_svg__Calque_2' data-name='Calque 2'>
        <g id='view-gantt_svg__Calque_1-2' data-name='Calque 1'>
          <path
            className='view-gantt_svg__cls-1'
            d='M10.49 0a1 1 0 00-1 1v2.2H2.31a2.32 2.32 0 000 4.64h7.2v1.34H4.33a2.32 2.32 0 000 4.64h5.18v1.36H6.36a2.32 2.32 0 000 4.64h3.15V23a1 1 0 002 0V1a1 1 0 00-1.02-1zM2.31 6.32a.82.82 0 110-1.64h7.2v1.64zm2 6a.82.82 0 010-1.64h5.2v1.64zm2 6a.82.82 0 110-1.64h3.2v1.64zM17.74 13.32h-3a2.33 2.33 0 010-4.65h3a2.33 2.33 0 010 4.65zm-3-3.15a.83.83 0 000 1.65h3a.83.83 0 000-1.65zM21.69 19.21h-7a2.33 2.33 0 010-4.65h7a2.33 2.33 0 010 4.65zm-7-3.15a.83.83 0 000 1.65h7a.83.83 0 000-1.65zM14.71 7.82A2.32 2.32 0 1117 5.5a2.31 2.31 0 01-2.29 2.32zm0-3.14a.82.82 0 000 1.64.82.82 0 100-1.64z'
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgViewGantt
