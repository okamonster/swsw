import type { ReactNode } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

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
  href: string
}

export const LinkButton = ({
  label,
  leftIcon,
  rightIcon,
  variant = 'primary',
  width = '100%',
  height = '40px',
  radius = 'md',
  href,
}: Props): ReactNode => {
  const baseButtonClass = classNames(styles.linkButton, [
    styles[variant],
    styles[radius],
  ])
  return (
    <Link
      href={href}
      className={baseButtonClass}
      style={{
        width,
        height,
        borderRadius: radiusSize[radius],
      }}
    >
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </Link>
  )
}
