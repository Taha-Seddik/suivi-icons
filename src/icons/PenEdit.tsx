import * as React from 'react'

function SvgPenEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M5.293 15.619L15.619 5.293a1 1 0 011.413 0l1.676 1.676a1 1 0 010 1.413L8.381 18.707a.995.995 0 01-.706.293H5v-2.675c0-.265.105-.519.293-.706zM13.75 7.16l3.09 3.09'
      />
    </svg>
  )
}

export default SvgPenEdit
