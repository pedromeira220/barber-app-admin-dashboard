import { tv } from 'tailwind-variants'

export const text = tv(
  {
    base: 'font-regular',
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      weight: {
        regular: 'font-regular',
        medium: 'font-medium',
        semibold: 'font-semibold',
      },
    },
    defaultVariants: {
      size: 'lg',
      weight: 'regular',
    },
  },
  {
    responsiveVariants: ['md'],
  },
)
