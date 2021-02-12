import * as React from 'react'

function SvgMedalPrizeReward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g
        strokeLinecap='round'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinejoin='round'
      >
        <path d='M11.999 14.884l2.006 1.054a.532.532 0 00.772-.561l-.383-2.233 1.623-1.58a.532.532 0 00-.295-.908l-2.242-.326-1.003-2.033a.532.532 0 00-.955 0L10.52 10.33l-2.242.326a.532.532 0 00-.295.908l1.623 1.58-.383 2.233a.532.532 0 00.772.561l2.006-1.054h-.002zM21.5 12h-1.1M3.6 12H2.5M18.86 5.14l-1.05 1.05M5.16 18.89l1.06-1.06M5.14 5.16l1.05 1.06M18.89 18.86l-1.06-1.05M12 20.44v1.06M12 2.5v1.06' />
      </g>
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  )
}

export default SvgMedalPrizeReward
