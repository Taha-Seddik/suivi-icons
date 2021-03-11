import * as React from 'react'

function SvgPropMonoLineText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g fill='none'>
        <path d='M24 24H0V0h24v24z' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M18 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3zM10.25 15.5h3.5M12 8.5v7'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M15.5 10.084V8.889a.389.389 0 00-.389-.389H8.889a.389.389 0 00-.389.389v1.196'
        />
      </g>
    </svg>
  )
}

export default SvgPropMonoLineText
