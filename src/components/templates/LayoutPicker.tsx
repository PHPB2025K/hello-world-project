import { useApp } from '@/contexts/AppContext'
import { LAYOUTS } from '@/data/layouts'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

export function LayoutPicker() {
  const { state, dispatch } = useApp()

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Layout Visual</label>
      <div className="grid grid-cols-2 gap-2">
        {LAYOUTS.map((layout) => (
          <button
            key={layout.id}
            onClick={() => dispatch({ type: 'SET_LAYOUT', payload: layout.id })}
            className={cn(
              'relative flex flex-col gap-1.5 p-2 rounded-lg border transition-all text-left',
              state.selectedLayout === layout.id
                ? 'border-primary ring-2 ring-primary/20'
                : 'border-border hover:border-primary/50'
            )}
          >
            {state.selectedLayout === layout.id && (
              <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>
            )}
            <div
              className="w-full h-16 rounded-md"
              style={{ background: layout.previewGradient }}
            />
            <div>
              <div className="text-xs font-medium truncate">{layout.name}</div>
              <div className="text-xs text-muted-foreground truncate">{layout.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
