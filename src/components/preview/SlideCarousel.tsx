import { useState, useCallback } from 'react'
import { useApp } from '@/contexts/AppContext'
import { useExport } from '@/hooks/useExport'
import { SlidePreview } from './SlidePreview'
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'

export function SlideCarousel() {
  const { state, dispatch } = useApp()
  const { registerSlideRef, exportSingleSlide } = useExport()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  const slides = state.content?.slides || []
  const total = slides.length

  const goTo = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, total - 1)))
  }, [total])

  const handleTextChange = useCallback(
    (field: 'headline' | 'body' | 'accent', value: string) => {
      dispatch({ type: 'UPDATE_SLIDE', payload: { index: currentSlide, field, value } })
    },
    [currentSlide, dispatch]
  )

  if (!state.content || slides.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        <div className="text-center space-y-2">
          <p className="text-lg">Nenhum conteúdo gerado</p>
          <p className="text-sm">Configure as opções e clique em "Gerar Conteúdo"</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col items-center gap-4 py-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => goTo(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-accent disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <SlidePreview
          ref={(el) => registerSlideRef(currentSlide, el)}
          slide={slides[currentSlide]}
          slideIndex={currentSlide}
          totalSlides={total}
          isEditing={isEditing}
          onTextChange={handleTextChange}
          scale={0.35}
        />

        <button
          onClick={() => goTo(currentSlide + 1)}
          disabled={currentSlide === total - 1}
          className="p-2 rounded-full hover:bg-accent disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          {currentSlide + 1} / {total}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
            isEditing ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
          }`}
        >
          {isEditing ? 'Salvando...' : 'Editar texto'}
        </button>
        <button
          onClick={() => exportSingleSlide(currentSlide)}
          className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-md border hover:bg-accent transition-colors"
        >
          <Download className="w-3 h-3" />
          Exportar slide
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 overflow-x-auto max-w-full px-4 pb-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`flex-shrink-0 rounded border-2 transition-colors ${
              i === currentSlide ? 'border-primary' : 'border-transparent'
            }`}
          >
            <SlidePreview
              ref={(el) => registerSlideRef(i, el)}
              slide={slide}
              slideIndex={i}
              totalSlides={total}
              scale={0.08}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
