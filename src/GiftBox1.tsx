import * as React from 'react'

function SvgGiftBox1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M20 8H4a1 1 0 00-1 1v2a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1zM12 21V8'
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      />
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M15.696 6.612C14.618 7.734 12.921 8 12.099 8M12.099 8s-.494-3.116.721-4.38M15.696 6.612a2.177 2.177 0 000-2.992 1.978 1.978 0 00-2.875 0M8.304 6.612C9.382 7.734 11.079 8 11.901 8M11.901 8s.494-3.116-.721-4.38M8.304 6.612a2.177 2.177 0 010-2.992 1.978 1.978 0 012.875 0M19 12v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgGiftBox1
