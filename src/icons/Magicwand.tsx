import * as React from 'react'

function SvgMagicwand(props: React.SVGProps<SVGSVGElement>) {
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
        <rect width={18} height={18} x={3} y={3} rx={4} />
        <path d='M9.5 14.49L7 16.99M12.13 14.65l-.67-2.13-2.13-.67h0a.502.502 0 01-.33-.61c.03-.11.09-.2.18-.26l1.81-1.29-.03-2.23-.01-.01a.49.49 0 01.48-.5c.1-.01.21.03.29.09l1.78 1.33 2.1-.72h-.01c.25-.09.53.05.61.3.03.1.03.21 0 .31l-.72 2.1 1.33 1.78h0c.16.21.11.51-.1.68-.09.06-.2.09-.3.09l-2.23-.03-1.29 1.81v-.01c-.16.21-.46.27-.68.11a.535.535 0 01-.19-.26z' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgMagicwand
