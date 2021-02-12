import * as React from 'react'

function SvgNotebookCheckmark(props: React.SVGProps<SVGSVGElement>) {
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
          d='M18 21H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2zM9 8h7M9 16h1'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M16.611 15.528l-1.945 1.945-1.166-1.167M9 12h7M2.5 8h3M2.5 16h2.8M2.5 12h2.8'
        />
      </g>
    </svg>
  )
}

export default SvgNotebookCheckmark
