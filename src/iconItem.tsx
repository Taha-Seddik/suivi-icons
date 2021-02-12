import * as React from 'react'
import * as icons from './icons'

interface IProps {
  iconId: string
}

export const IconItem: React.FC<IProps> = (props) => {
  const { iconId, ...extraProps } = props
  return React.cloneElement(icons[iconId], { ...extraProps })
}
