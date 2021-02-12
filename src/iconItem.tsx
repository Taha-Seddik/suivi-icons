import * as React from 'react'
import * as icons from './icons'

interface IProps {
  iconId: string
}

export const IconItem: React.FC<IProps & React.SVGProps<SVGSVGElement>> = (
  props
) => {
  const { iconId, ...extraProps } = props
  const icon = icons[iconId]
  return React.createElement(icon, { ...extraProps })
}
