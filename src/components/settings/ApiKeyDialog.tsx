import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { Settings, Eye, EyeOff, Check } from 'lucide-react'

export function ApiKeyDialog() {
  const { state, dispatch } = useApp()
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState(state.apiKey || '')
  const [showKey, setShowKey] = useState(false)

  const handleSave = () => {
    dispatch({ type: 'SET_API_KEY', payload: key.trim() || null })
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors w-full"
      >
        <Settings className="w-4 h-4" />
        <span>API Key</span>
        {state.apiKey && <Check className="w-4 h-4 ml-auto text-green-500" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative bg-card rounded-lg shadow-lg p-6 w-full max-w-md mx-4 space-y-4">
            <h2 className="text-lg font-semibold">Configurar API Key</h2>
            <p className="text-sm text-muted-foreground">
              Insira sua API key da Anthropic. Ela será salva localmente no seu navegador.
            </p>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="sk-ant-..."
                className="w-full px-3 py-2 pr-10 border rounded-md bg-background text-foreground text-sm"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm rounded-md border hover:bg-accent transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
