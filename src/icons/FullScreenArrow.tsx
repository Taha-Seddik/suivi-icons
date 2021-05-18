import * as React from 'react'

function SvgFullScreenArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M0 0h20v20H0z' />
        <g
          strokeLinecap='round'
          strokeLinejoin='round'
          stroke='#828B9E'
          strokeWidth={1.25}
        >
          <path d='M14.167 2.5H17.5v3.333M12.5 7.5l5-5M5.833 17.5H2.5v-3.333M7.5 12.5l-5 5M3.333 9.167V5c0-.92.746-1.667 1.667-1.667h4.167M16.667 10.833V15c0 .92-.746 1.667-1.667 1.667h-5' />
        </g>
      </g>
    </svg>
  )
}

export default SvgFullScreenArrow
