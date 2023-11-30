import { ElementType } from "react"

interface NotificationIconProps {
  icon: ElementType
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return <Icon className="text-violet-500 w-6 h-6" />
}
