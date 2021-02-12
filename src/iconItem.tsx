import * as React from 'react'
import * as icons from './icons'
// eslint-disable-next-line no-unused-vars
import { iconsType } from './iconsList'

interface IProps {
  iconId: iconsType
}

export const IconItem: React.FC<IProps & React.SVGProps<SVGSVGElement>> = (
  props
) => {
  const { iconId, ...extraProps } = props
  const icon = icons[iconId]
  return React.createElement(icon, { ...extraProps })
}
