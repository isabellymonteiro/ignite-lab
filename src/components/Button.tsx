import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className='py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'>
      {children}
    </Comp>
  )
}

export default Button