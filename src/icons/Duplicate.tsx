import * as React from 'react'

function SvgDuplicate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M7 6v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3h-8a3 3 0 00-3 3z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M17 17v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-8a3 3 0 013-3h1M14 12V8M12 10h4'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path d='M0 24V0h24v24z' fill='none' />
    </svg>
  )
}

export default SvgDuplicate
