import clsx from 'clsx'
import { AllHTMLAttributes } from 'react'

interface TagProps extends AllHTMLAttributes<HTMLSpanElement> {
  classes?: string
  color?: string
  tone?: string
  children: string | JSX.Element
}

const Tag = ({
  classes = '',
  color = 'blue',
  children,
  ...props
}: TagProps) => {
  let colorClasses = ''
  switch (color) {

    case 'purple':
      colorClasses = clsx(
        'bg-purple-500 ring-purple-600',
        'hover:bg-purple-600'
      )
      break

    case 'red':
      colorClasses = clsx(
        'bg-red-500 ring-red-600',
        'hover:bg-red-600'
      )
      break

    case 'yellow':
      colorClasses = clsx(
        'bg-yellow-500 ring-yellow-600',
        'hover:bg-yellow-600'
      )
      break

    case 'green':
      colorClasses = clsx(
        'bg-green-500 ring-green-600',
        'hover:bg-green-600'
      )
      break

    case 'blue':
      colorClasses = clsx(
        'bg-blue-500 ring-blue-600',
        'hover:bg-blue-600'
      )
      break

    case 'gray':
      colorClasses = clsx(
        'bg-gray-600 ring-gray-400',
        'hover:bg-black'
      )
      break

    case 'black':
      colorClasses = clsx(
        'bg-black ring-gray-700 dark:bg-slate-800',
        'hover:bg-gray-500 hover:dark:bg-black'
      )
      break

    default:
      break
  }

  return (
    <span
      className={clsx(
        'my-1 px-2 py-1 rounded-md text-white cursor-default',
        classes,
        colorClasses,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Tag
