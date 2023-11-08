import { FC } from 'react'
import { Check } from 'lucide-react'

interface CheckBadgeProps {
    text: string
}

const CheckBadge: FC<CheckBadgeProps> = ({text="text"}) => {
  return (
    <div className='flex gap-1.5 items-center rounded-md shadow-md max-w-fit pl-2 pr-3 py-1'>
      <Check color="cyan" size='1.25rem' />
      <p className='font-medium'>{text}</p>
    </div>
  )
}

export default CheckBadge