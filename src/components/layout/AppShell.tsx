import { Sidebar } from './Sidebar'
import { MainArea } from './MainArea'

export function AppShell() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MainArea />
    </div>
  )
}
