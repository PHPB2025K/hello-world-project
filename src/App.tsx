import { AppProvider } from '@/contexts/AppContext'
import { Index } from '@/pages/Index'

function App() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  )
}

export default App
