import * as React from 'react'

function SvgDocumentsFileCheckmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        d='M17 17v2a2 2 0 01-1.999 2H6a2 2 0 01-2-1.999V8a2 2 0 011.999-2H8M20 7.5h-3A1.5 1.5 0 0115.5 6V3'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M8 15V5a2 2 0 012-2h6.06a2 2 0 011.415.586l1.94 1.94A2 2 0 0120 6.94V15a2 2 0 01-2 2h-8a2 2 0 01-2-2z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M12.4 11.3l1.201 1.2 1.999-2'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgDocumentsFileCheckmark
