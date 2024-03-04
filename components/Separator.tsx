import clsx from 'clsx'
import { AllHTMLAttributes } from 'react'

interface TagProps extends AllHTMLAttributes<HTMLDivElement> {
  classes?: string
}

const Separator = ({
  classes = '',
  children,
  ...props
}: TagProps) => {
  return (
    <div
      className={clsx(
        'h-px my-4 bg-black dark:bg-white',
        classes,
      )}
      {...props}
    ></div>
  )
}

export default Separator
