import { useGenerateContent } from '@/hooks/useGenerateContent'
import { Sparkles, Loader2 } from 'lucide-react'

export function GenerateButton() {
  const { generate, isGenerating } = useGenerateContent()

  return (
    <button
      onClick={generate}
      disabled={isGenerating}
      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Gerando conteúdo...
        </>
      ) : (
        <>
          <Sparkles className="w-4 h-4" />
          Gerar Conteúdo
        </>
      )}
    </button>
  )
}
