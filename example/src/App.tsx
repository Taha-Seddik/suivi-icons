// import React, { useState } from 'react'
// import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
// import * as icons from 'suivi-icons'
// import { useSnackbar } from 'notistack'
// import InputBase from '@material-ui/core/InputBase'
// import clsx from 'clsx'

// const getIconBykey = (key: string) => {
//   return icons[key]
// }

// const App: React.FC<{}> = () => {
//   const { enqueueSnackbar } = useSnackbar()
//   const [iconsNames, setIconsNames] = useState(Object.keys(icons))
//   const [iconsObjsArr, setIconsObjsArr] = useState(Object.values(icons))
//   const [selected, setSelected] = useState<string | null>(null)
//   const selectIcon = (i: number) => {
//     setSelected(iconsNames[i])
//     // copy to clipboard
//     const code = `import { ${iconsNames[i]} } from "suivi-icons"`
//     navigator.clipboard.writeText(code)
//     // open snakbar
//     enqueueSnackbar(`Successfully Copied ${iconsNames[i]}`, {
//       variant: 'success',
//       anchorOrigin: { vertical: 'top', horizontal: 'right' },
//       preventDuplicate: true,
//       autoHideDuration: 1000
//     })
//   }

//   const onNewWrittenTxt = (newTxt: string) => {
//     if (newTxt !== ' ' && newTxt !== '') {
//       const newIconsNames = iconsNames.filter((x) =>
//         x.toUpperCase().includes(newTxt.toUpperCase())
//       )
//       setIconsNames(newIconsNames)
//       const newIconsObjsArr = newIconsNames.map((x) => getIconBykey(x))
//       setIconsObjsArr(newIconsObjsArr)
//     } else {
//       setIconsNames(Object.keys(icons))
//       setIconsObjsArr(Object.values(icons))
//     }
//   }

//   return (
//     <div className='iconsContainer'>
//       <Typography className='title' variant='h4' gutterBottom>
//         Suivi Icons
//       </Typography>
//       <div className='UpperSide flexRow'>
//         <Typography
//           className='sub-title'
//           variant='h5'
//           gutterBottom
//           color='textSecondary'
//         >
//           Icons
//         </Typography>
//         <SearchBlock onChange={onNewWrittenTxt} />
//         <Typography variant='caption'>{iconsNames.length} icons</Typography>
//       </div>
//       <IconsListBlock
//         iconsNames={iconsNames}
//         selectIcon={selectIcon}
//         selected={selected}
//         iconsObjsArr={iconsObjsArr}
//       />
//     </div>
//   )
// }

// interface ISearchBlockProps {
//   onChange: (writtenTxt: string) => void
// }

// const SearchBlock: React.FC<ISearchBlockProps> = ({ onChange }) => {
//   return (
//     <Paper className='searchBlock'>
//       <icons.SearchLoupe fontSize='24' color='gray' />
//       <InputBase
//         onChange={(e) => onChange(e.target.value)}
//         placeholder='Search icon'
//         inputProps={{ 'aria-label': 'search suivi icons' }}
//       />
//     </Paper>
//   )
// }

// interface IIconsListProps {
//   iconsNames: string[]
//   iconsObjsArr: React.ElementType[]
//   selected: string | null
//   selectIcon: (i: number) => void
// }

// const IconsListBlock: React.FC<IIconsListProps> = ({
//   iconsNames,
//   iconsObjsArr,
//   selected,
//   selectIcon
// }) => {
//   return (
//     <div className='IconsListBlock flexRow'>
//       {iconsObjsArr.map((X, i) => (
//         <div
//           key={iconsNames[i]}
//           className={clsx(
//             'IconLabelContainer',
//             'flexColumnCentredChilds',
//             selected === iconsNames[i] && 'selectedIcon'
//           )}
//           onClick={() => selectIcon(i)}
//         >
//           <Paper className='iconPaper flexColumnCentredChilds'>
//             <X fontSize='50' />
//           </Paper>
//           <Typography className='iconLabel txtEllipsis' variant='caption'>
//             {iconsNames[i]}
//           </Typography>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App

import React from 'react'
import { IconItem } from 'suivi-icons'
const App: React.FC<{}> = () => {
  return <IconItem iconId='ArrowForward' color='red' height='150' width='150' />
}

export default App
