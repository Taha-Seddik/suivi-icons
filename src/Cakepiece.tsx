import * as React from 'react'

function SvgCakepiece(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path fill='none' d='M0 0h24v24H0z' />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M3.253 11.981H21M3 17h0a4.508 4.508 0 013.6 0h0a4.508 4.508 0 003.6 0h0a4.508 4.508 0 013.6 0h0a4.508 4.508 0 003.6 0h0a4.508 4.508 0 013.6 0h0'
      />
      <path
        d='M3.75 11.378l8.651-6.937a2.05 2.05 0 011.52-.427A8.013 8.013 0 0121 11.98v7.015A2.002 2.002 0 0119 21H5a2.002 2.002 0 01-2-2.005v-6.052a2.006 2.006 0 01.75-1.565z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgCakepiece
