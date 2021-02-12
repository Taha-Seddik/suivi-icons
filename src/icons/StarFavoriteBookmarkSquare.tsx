import * as React from 'react'

function SvgStarFavoriteBookmarkSquare(props: React.SVGProps<SVGSVGElement>) {
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
        <path d='M12.041 15.077l2.146 1.127a.565.565 0 00.819-.596l-.41-2.39 1.731-1.686a.568.568 0 00-.314-.968l-2.393-.347-1.072-2.174a.565.565 0 00-1.013 0l-1.072 2.174-2.538.368a.495.495 0 00-.275.845l1.836 1.788-.411 2.39a.565.565 0 00.819.596l2.146-1.127' />
        <path d='M17 21H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4z' />
      </g>
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  )
}

export default SvgStarFavoriteBookmarkSquare
