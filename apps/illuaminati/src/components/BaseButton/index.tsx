import type { ComponentProps, ReactNode } from 'react'
import classNames from 'classnames'

import type { Radius, Variant } from './types'
import styles from './styles.module.css'

type Props = {
  label: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: Variant
  color?: string
  width?: string
  height?: string
  radius?: Radius
} & ComponentProps<'button'>

export const BaseButton = ({
  label,
  leftIcon,
  rightIcon,
  variant = 'primary',
  color = '',
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
    <button className={baseButtonClass} {...props}>
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </button>
  )
}
