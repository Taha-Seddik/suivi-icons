import * as React from 'react'

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
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
        d='M19.613 7.215A8.988 8.988 0 017.215 19.613M14 3.23a8.935 8.935 0 012.785 1.157M3.23 14a8.935 8.935 0 001.157 2.785M10 3.23a8.935 8.935 0 00-2.785 1.157M4.387 7.215A8.935 8.935 0 003.23 10M12 9v6M9.5 11.5L12 9l2.5 2.5'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
  )
}

export default SvgUpload
