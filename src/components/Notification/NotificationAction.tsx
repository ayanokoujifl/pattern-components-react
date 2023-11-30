import { X } from "lucide-react"
import { ElementType } from "react"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface NotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        " w-8 h-8 bg-zinc-400 items-center justify-center flex rounded hover:bg-zinc-500",
        rest.className
      )}
    >
      <Icon className="w-4 h-4 text-zinc-50" />
    </button>
  )
}
