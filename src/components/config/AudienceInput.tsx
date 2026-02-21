import { useApp } from '@/contexts/AppContext'

export function AudienceInput() {
  const { state, dispatch } = useApp()

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Público-alvo</label>
      <input
        type="text"
        value={state.audience}
        onChange={(e) => dispatch({ type: 'SET_AUDIENCE', payload: e.target.value })}
        placeholder="Ex: empreendedores, estudantes, mães..."
        className="w-full px-3 py-2 border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  )
}
