import { useApp } from '@/contexts/AppContext'
import type { PostFormat } from '@/types'
import { cn } from '@/lib/utils'
import { LayoutGrid, Image, Film } from 'lucide-react'

const FORMAT_OPTIONS: { value: PostFormat; label: string; icon: typeof LayoutGrid }[] = [
  { value: 'carousel', label: 'Carrossel', icon: LayoutGrid },
  { value: 'single', label: 'Post Único', icon: Image },
  { value: 'stories', label: 'Stories', icon: Film },
]

export function FormatSelector() {
  const { state, dispatch } = useApp()

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Formato</label>
      <div className="grid grid-cols-3 gap-2">
        {FORMAT_OPTIONS.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => dispatch({ type: 'SET_FORMAT', payload: value })}
            className={cn(
              'flex flex-col items-center gap-1.5 p-3 rounded-lg border text-sm transition-all',
              state.format === value
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-border hover:border-primary/50 text-muted-foreground'
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
