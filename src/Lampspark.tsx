import * as React from 'react'

function SvgLampspark(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M14.69 15.81H9.31M9.07 15.56h0a5.084 5.084 0 01-1.23-7.09 5.07 5.07 0 017.08-1.23c2.29 1.61 2.84 4.78 1.22 7.08-.34.47-.75.88-1.23 1.22v-.01c-.24.15-.39.42-.39.7v2.34h0c0 1.16-.95 2.11-2.12 2.11-.01 0-.01-.01-.01-.01h-.85v-.001c-1.17 0-2.12-.95-2.12-2.12l-.01-.01v-2.35l-.01-.01a.923.923 0 00-.39-.72zM18.36 5.37l-.63.64M6.27 17.46l-.63.64M21 11.74h-.9M3.9 11.74H3M18.36 18.1l-.63-.64M6.27 6.01l-.63-.64M12 3.64v-.9' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgLampspark
