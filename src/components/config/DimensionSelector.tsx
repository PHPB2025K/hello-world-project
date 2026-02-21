import { useApp } from '@/contexts/AppContext'
import { DIMENSIONS, type Dimension } from '@/types'
import { cn } from '@/lib/utils'

export function DimensionSelector() {
  const { state, dispatch } = useApp()

  const availableDimensions: Dimension[] =
    state.format === 'stories'
      ? ['1080x1920']
      : ['1080x1080', '1080x1350']

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Dimensão</label>
      <div className="grid grid-cols-2 gap-2">
        {availableDimensions.map((dim) => {
          const info = DIMENSIONS[dim]
          const aspectW = dim === '1080x1080' ? 40 : dim === '1080x1350' ? 32 : 24
          const aspectH = dim === '1080x1080' ? 40 : dim === '1080x1350' ? 40 : 42

          return (
            <button
              key={dim}
              onClick={() => dispatch({ type: 'SET_DIMENSION', payload: dim })}
              className={cn(
                'flex flex-col items-center gap-2 p-3 rounded-lg border transition-all',
                state.dimension === dim
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <div
                className={cn(
                  'border-2 rounded',
                  state.dimension === dim ? 'border-primary' : 'border-muted-foreground/30'
                )}
                style={{ width: aspectW, height: aspectH }}
              />
              <div className="text-center">
                <div className="text-xs font-medium">{info.label}</div>
                <div className="text-xs text-muted-foreground">{info.ratio}</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
