import * as React from 'react'

function SvgCollect(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10.25 2v8.25M7.5 7.5l2.75 2.75L13 7.5'
        stroke='#828B9D'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 4.75H6.02c-.764 0-1.448.474-1.716 1.19L2.116 11.77a1.842 1.842 0 00-.116.645v3.334c0 1.013.82 1.833 1.833 1.833h12.834c1.013 0 1.833-.82 1.833-1.833v-3.334c0-.22-.04-.438-.116-.644L16.196 5.94a1.833 1.833 0 00-1.717-1.19H13'
        stroke='#828B9D'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.035 12.083h3.986c.347 0 .664.196.82.507l.41.82c.155.31.472.506.82.506h4.367a.915.915 0 00.819-.507l.41-.82a.918.918 0 01.82-.506h3.986'
        stroke='#828B9D'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default SvgCollect
