import * as React from 'react'

function SvgViewCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <style>{'.view-card_svg__cls-1{fill:#323232}'}</style>
      </defs>
      <g id='view-card_svg__Calque_2' data-name='Calque 2'>
        <g id='view-card_svg__Calque_1-2' data-name='Calque 1'>
          <path
            className='view-card_svg__cls-1'
            d='M5.22 1.5v3.72H1.5V1.5h3.72m.5-1.5H1a1 1 0 00-1 1v4.72a1 1 0 001 1h4.72a1 1 0 001-1V1a1 1 0 00-1-1zM13.86 1.5v3.72h-3.72V1.5h3.72m.5-1.5H9.64a1 1 0 00-1 1v4.72a1 1 0 001 1h4.72a1 1 0 001-1V1a1 1 0 00-1-1zM5.22 10.14v3.72H1.5v-3.72h3.72m.5-1.5H1a1 1 0 00-1 1v4.72a1 1 0 001 1h4.72a1 1 0 001-1V9.64a1 1 0 00-1-1zM13.86 10.14v3.72h-3.72v-3.72h3.72m.5-1.5H9.64a1 1 0 00-1 1v4.72a1 1 0 001 1h4.72a1 1 0 001-1V9.64a1 1 0 00-1-1zM13.86 18.78v3.72h-3.72v-3.72h3.72m.5-1.5H9.64a1 1 0 00-1 1V23a1 1 0 001 1h4.72a1 1 0 001-1v-4.72a1 1 0 00-1-1zM22.5 1.5v3.72h-3.72V1.5h3.72M23 0h-4.72a1 1 0 00-1 1v4.72a1 1 0 001 1H23a1 1 0 001-1V1a1 1 0 00-1-1z'
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgViewCard
