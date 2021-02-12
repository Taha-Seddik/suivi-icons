import * as React from 'react'

function SvgPositiontarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M0 0h24v24H0z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M16.95 7.05a7 7 0 11-9.9 9.9 7 7 0 019.9-9.9M12 21v-4M12 3v4M7 12H3M21 12h-4'
        />
      </g>
    </svg>
  )
}

export default SvgPositiontarget
