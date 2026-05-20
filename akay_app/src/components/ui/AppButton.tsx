import type { ButtonHTMLAttributes, ReactNode } from 'react'

type AppButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

function AppButton({ children, className = '', type = 'button', ...props }: AppButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-full bg-(--danger-strong) px-3.5 py-1.5 text-[clamp(0.78rem,3.1vw,1.1rem)] font-bold uppercase tracking-[0.08em] text-white transition hover:brightness-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default AppButton
