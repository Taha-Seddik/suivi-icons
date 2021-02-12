import * as React from 'react'

function SvgCursorSelectHand3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M12.706 13V8.5a1.5 1.5 0 00-1.5-1.5v0a1.5 1.5 0 00-1.5 1.5V16l-2.032-.677a1.652 1.652 0 00-1.69.399v0a1.651 1.651 0 00.11 2.436l4.055 3.379c.361.299.814.463 1.281.463h4.51a2 2 0 001.985-1.752l.543-4.343a2 2 0 00-1.656-2.221L12.706 13zM5.21 8h1M17.21 8h-1M15.45 3.76l-.71.7M6.96 3.76l.71.7M11.21 2v1' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgCursorSelectHand3
