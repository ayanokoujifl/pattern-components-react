import { ReactNode } from "react"

interface NotificationRootProps {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="flex bg-zinc-900 px-8 py-4 items-start gap-6 min-w-[100%]">
      {children}
    </div>
  )
}
