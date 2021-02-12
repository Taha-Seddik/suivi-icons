import * as React from 'react'

function SvgMedicalcross1(props: React.SVGProps<SVGSVGElement>) {
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
          d='M16.362 12l3.577 2.018a1 1 0 01.37 1.38l-1.163 1.969a.999.999 0 01-1.352.362l-3.612-2.038V20a1 1 0 01-1 1H10.82a1 1 0 01-1-1v-4.309l-3.612 2.038a.999.999 0 01-1.352-.362l-1.163-1.969a1 1 0 01.37-1.38L7.638 12 4.061 9.982a1 1 0 01-.37-1.38l1.163-1.969a.999.999 0 011.352-.362l3.612 2.038V4a1 1 0 011-1h2.362a1 1 0 011 1v4.309l3.612-2.038a.999.999 0 011.352.362l1.163 1.969a1 1 0 01-.37 1.38L16.362 12z'
        />
      </g>
    </svg>
  )
}

export default SvgMedicalcross1
