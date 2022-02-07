import * as React from 'react'

function SvgFolderTree(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        d='M9 17H5a2 2 0 01-2-2V3M9 7H3M21 8.5V5a1.5 1.5 0 00-1.5-1.5h-2.062a1 1 0 01-.827-.438l-.425-.624A1 1 0 0015.36 2H13.5A1.5 1.5 0 0012 3.5v5a1.5 1.5 0 001.5 1.5h6A1.5 1.5 0 0021 8.5zM21 19.5V16a1.5 1.5 0 00-1.5-1.5h-2.062a1 1 0 01-.827-.438l-.425-.624A1 1 0 0015.36 13H13.5a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgFolderTree
