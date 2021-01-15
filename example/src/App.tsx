import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import * as icons from 'suivi-icons'
import { Snackbar } from '@material-ui/core'

const App: React.FC<{}> = () => {
  const [open, setOpen] = React.useState(false)
  const iconsNames = Object.keys(icons)
  const copyCodeToClipboard = (iconName: string) => {
    const code = `import { ${iconName} } from "suivi-icons"`
    navigator.clipboard.writeText(code)
    setOpen(true)
  }

  return (
    <div className='iconsContainer'>
      <Typography className='title' variant='h3'>
        Suivi-Icons
      </Typography>
      <div className=' flexRow'>
        {Object.values(icons).map((X, i) => (
          <Paper
            className='iconPaper flexColumn'
            onClick={() => copyCodeToClipboard(iconsNames[i])}
          >
            <X fontSize='50' />
            <Typography className='txtEllipsis' variant='caption'>
              {iconsNames[i]}
            </Typography>
          </Paper>
        ))}
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        message='Copied!'
      />
    </div>
  )
}

export default App
