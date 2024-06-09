import type { ComponentProps, ReactNode } from 'react'
import classNames from 'classnames'

import { radiusSize, type Radius, type Variant } from './types'
import styles from './style.module.css'

type Props = {
  label: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: Variant
  width?: string
  height?: string
  radius?: Radius
} & ComponentProps<'button'>

export const BaseButton = ({
  label,
  leftIcon,
  rightIcon,
  variant = 'primary',
  width = '100%',
  height = '40px',
  radius = 'md',
  ...props
}: Props): ReactNode => {
  const baseButtonClass = classNames(styles.baseButton, [
    styles[variant],
    styles[radius],
  ])
  return (
    <button
      className={baseButtonClass}
      {...props}
      style={{
        width,
        height,
        borderRadius: radiusSize[radius],
      }}
    >
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </button>
  )
}
