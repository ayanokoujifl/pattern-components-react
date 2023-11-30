import { Notification } from "@/components/Notification"
import { Check, Rocket, X } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <div className="px-4 py-3 bg-zinc-800 rounded-lg min-h-[256px] items-center flex flex-col justify-center gap-2">
        <Notification.Root>
          <Notification.Content text="Notificação" />
          <Notification.Actions>
            <Notification.Action icon={X} />
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Notificação" />
          <Notification.Actions>
            <Notification.Action
              icon={Check}
              className="bg-violet-500 hover:bg-violet-600"
            />
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Notificação" />
          <Notification.Actions>
            <Notification.Action
              icon={X}
              className="bg-red-500 hover:bg-red-600"
            />
            <Notification.Action
              icon={Check}
              className="bg-emerald-500 hover:bg-emerald-600"
            />
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Rocket} />
          <Notification.Content text="Notificação" />
        </Notification.Root>
      </div>
    </div>
  )
}
