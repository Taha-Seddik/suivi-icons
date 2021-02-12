import * as React from 'react'

function SvgAlarmclocktime(props: React.SVGProps<SVGSVGElement>) {
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
          d='M12 21c4.95 0 9-4.05 9-9s-4.05-9-9-9M12 21c-2.931 0-5.538-1.426-7.184-3.612'
        />
        <path
          stroke='currentColor'
          strokeDasharray='0 3.3'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M4.816 17.388A8.931 8.931 0 013 12c0-4.95 4.05-9 9-9'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M7.359 15.639l4.922-2.936V6.375'
        />
      </g>
    </svg>
  )
}

export default SvgAlarmclocktime
