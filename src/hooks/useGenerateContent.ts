import { useCallback } from 'react'
import { useApp } from '@/contexts/AppContext'
import { generateContent } from '@/lib/anthropic'
import { buildPrompt } from '@/lib/prompts'

export function useGenerateContent() {
  const { state, dispatch } = useApp()

  const generate = useCallback(async () => {
    if (!state.apiKey) {
      dispatch({ type: 'SET_ERROR', payload: 'Configure sua API key da Anthropic primeiro.' })
      return
    }
    if (!state.theme.trim()) {
      dispatch({ type: 'SET_ERROR', payload: 'Preencha o tema/assunto do conteúdo.' })
      return
    }

    dispatch({ type: 'SET_GENERATING', payload: true })

    try {
      const prompt = buildPrompt({
        format: state.format,
        slideCount: state.slideCount,
        dimension: state.dimension,
        theme: state.theme,
        tone: state.tone,
        audience: state.audience,
      })

      const content = await generateContent(state.apiKey, prompt)

      while (content.slides.length < state.slideCount) {
        content.slides.push({
          headline: `Slide ${content.slides.length + 1}`,
          body: '',
        })
      }
      if (content.slides.length > state.slideCount) {
        content.slides = content.slides.slice(0, state.slideCount)
      }

      dispatch({ type: 'SET_CONTENT', payload: content })
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err instanceof Error ? err.message : 'Erro desconhecido ao gerar conteúdo.',
      })
    }
  }, [state.apiKey, state.theme, state.format, state.slideCount, state.dimension, state.tone, state.audience, dispatch])

  return {
    generate,
    isGenerating: state.isGenerating,
    error: state.error,
    content: state.content,
  }
}
