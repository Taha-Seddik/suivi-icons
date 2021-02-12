import * as React from 'react'

function SvgStore(props: React.SVGProps<SVGSVGElement>) {
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
          d='M7.5 9.75v0A2.25 2.25 0 015.25 12M12 9.75v0a2.25 2.25 0 01-4.5 0M16.5 9.75v0a2.25 2.25 0 01-4.5 0M18.75 12h0a2.25 2.25 0 01-2.25-2.25s0 0 0 0M20 11.62V21M22 21H2M4 11.62V21'
        />
        <rect
          width={4}
          height={3}
          x={13.5}
          y={15}
          rx={0.276}
          ry={0}
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M7 21v-5.5h0a.5.5 0 01.5-.5H10a.5.5 0 01.5.5V21M7.5 9.75V9M12 9.75V9M16.5 9.75V9M20.91 9H3.09M18.75 12v0h0A2.25 2.25 0 0021 9.75v-.127h0c0-.408-.111-.808-.321-1.157l-2.1-3.495h0A2 2 0 0016.868 4H7.132h0a2 2 0 00-1.715.971l-2.1 3.495h0c-.209.35-.318.75-.317 1.157v.127h0A2.25 2.25 0 005.25 12s0 0 0 0v0'
        />
      </g>
    </svg>
  )
}

export default SvgStore
