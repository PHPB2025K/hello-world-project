import { useApp } from '@/contexts/AppContext'

export function ThemeInput() {
  const { state, dispatch } = useApp()

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Tema / Assunto</label>
      <textarea
        value={state.theme}
        onChange={(e) => dispatch({ type: 'SET_THEME', payload: e.target.value })}
        placeholder="Descreva o que você quer comunicar..."
        rows={3}
        className="w-full px-3 py-2 border rounded-md bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  )
}
