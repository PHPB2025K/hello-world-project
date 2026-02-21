import { useApp } from '@/contexts/AppContext'
import { TONES, type Tone } from '@/types'
import { cn } from '@/lib/utils'

export function ToneSelector() {
  const { state, dispatch } = useApp()

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Tom de Voz</label>
      <div className="flex flex-wrap gap-2">
        {TONES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => dispatch({ type: 'SET_TONE', payload: value as Tone })}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-all',
              state.tone === value
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
