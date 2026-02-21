import { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { useExport } from '@/hooks/useExport'
import { Download, Archive, Copy, Check } from 'lucide-react'

export function ExportBar() {
  const { state } = useApp()
  const { exportAllSlides, copyCaptionAndHashtags } = useExport()
  const [copied, setCopied] = useState(false)
  const [exporting, setExporting] = useState(false)

  if (!state.content) return null

  const handleExportAll = async () => {
    setExporting(true)
    try {
      await exportAllSlides()
    } finally {
      setExporting(false)
    }
  }

  const handleCopy = async () => {
    await copyCaptionAndHashtags()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border-t bg-card p-4">
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={handleExportAll}
          disabled={exporting}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {exporting ? (
            <Archive className="w-4 h-4 animate-pulse" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          {exporting ? 'Exportando...' : 'Exportar tudo (ZIP)'}
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-md border text-sm hover:bg-accent transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-500" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copiar legenda + hashtags
            </>
          )}
        </button>
      </div>

      {state.content.caption && (
        <div className="mt-3 p-3 rounded-md bg-muted text-sm">
          <p className="font-medium text-xs text-muted-foreground mb-1">Legenda:</p>
          <p className="whitespace-pre-wrap text-xs">{state.content.caption}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {state.content.hashtags.join(' ')}
          </p>
        </div>
      )}
    </div>
  )
}
