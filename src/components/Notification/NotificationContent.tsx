interface NotificationContentProps {
  text: string
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="text-sm text-zinc-400 leading-relaxed">{text}</p>
      <div className="text-xs text-zinc-400 items-center flex gap-1">
        <span>Categoria</span>
        <span>tempo</span>
      </div>
    </div>
  )
}
