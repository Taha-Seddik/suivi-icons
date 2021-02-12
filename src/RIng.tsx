import * as React from 'react'

function SvgRIng(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12 3.5V2M8.512 8.907l.205-.38A1 1 0 019.598 8h4.805c.368 0 .706.202.881.526l.205.38a1 1 0 01-.221 1.225l-2.607 2.289a1.001 1.001 0 01-1.32 0l-2.607-2.289a.999.999 0 01-.222-1.224zM18 6l1-1M6 6L5 5' />
        <path d='M9.75 11.024c-2.036.972-3.359 3.197-2.914 5.69.367 2.051 1.988 3.739 4.027 4.166a5.256 5.256 0 006.386-5.131c0-2.091-1.231-3.881-3-4.726' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgRIng
