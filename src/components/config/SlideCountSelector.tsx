import { useApp } from '@/contexts/AppContext'

export function SlideCountSelector() {
  const { state, dispatch } = useApp()

  if (state.format === 'single') return null

  const min = state.format === 'carousel' ? 2 : 1
  const max = state.format === 'carousel' ? 10 : 15
  const label = state.format === 'carousel' ? 'Slides' : 'Stories'

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Quantidade de {label}</label>
        <span className="text-sm font-semibold text-primary">{state.slideCount}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={state.slideCount}
        onChange={(e) => dispatch({ type: 'SET_SLIDE_COUNT', payload: Number(e.target.value) })}
        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}
