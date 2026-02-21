import { useApp } from '@/contexts/AppContext'
import { ApiKeyDialog } from '@/components/settings/ApiKeyDialog'
import { FormatSelector } from '@/components/config/FormatSelector'
import { SlideCountSelector } from '@/components/config/SlideCountSelector'
import { DimensionSelector } from '@/components/config/DimensionSelector'
import { ThemeInput } from '@/components/config/ThemeInput'
import { ToneSelector } from '@/components/config/ToneSelector'
import { AudienceInput } from '@/components/config/AudienceInput'
import { GenerateButton } from '@/components/config/GenerateButton'
import { LayoutPicker } from '@/components/templates/LayoutPicker'
import { Instagram, AlertCircle } from 'lucide-react'

export function Sidebar() {
  const { state } = useApp()

  return (
    <aside className="w-80 shrink-0 border-r bg-card flex flex-col h-screen">
      <div className="p-4 border-b flex items-center gap-2">
        <Instagram className="w-5 h-5 text-primary" />
        <h1 className="font-semibold text-sm">Instagram Content Creator</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        <ApiKeyDialog />

        <div className="h-px bg-border" />

        <FormatSelector />
        <SlideCountSelector />
        <DimensionSelector />

        <div className="h-px bg-border" />

        <ThemeInput />
        <ToneSelector />
        <AudienceInput />

        <div className="h-px bg-border" />

        <LayoutPicker />
      </div>

      <div className="p-4 border-t space-y-2">
        {state.error && (
          <div className="flex items-start gap-2 p-2 rounded-md bg-destructive/10 text-destructive text-xs">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{state.error}</span>
          </div>
        )}
        <GenerateButton />
      </div>
    </aside>
  )
}
