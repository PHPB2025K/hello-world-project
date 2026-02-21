import { useCallback, useRef } from 'react'
import { exportSlideAsPng, exportAllSlidesAsZip, copyToClipboard } from '@/lib/export'
import { useApp } from '@/contexts/AppContext'

export function useExport() {
  const { state } = useApp()
  const slideRefs = useRef<Map<number, HTMLElement>>(new Map())

  const registerSlideRef = useCallback((index: number, el: HTMLElement | null) => {
    if (el) {
      slideRefs.current.set(index, el)
    } else {
      slideRefs.current.delete(index)
    }
  }, [])

  const exportSingleSlide = useCallback(async (index: number) => {
    const el = slideRefs.current.get(index)
    if (!el) return
    const name = state.content?.title || 'slide'
    await exportSlideAsPng(el, `${name}-slide-${index + 1}.png`)
  }, [state.content?.title])

  const exportAllSlides = useCallback(async () => {
    const elements: HTMLElement[] = []
    const count = state.content?.slides.length || 0
    for (let i = 0; i < count; i++) {
      const el = slideRefs.current.get(i)
      if (el) elements.push(el)
    }
    if (elements.length === 0) return
    const name = state.content?.title || 'instagram-content'
    await exportAllSlidesAsZip(elements, name)
  }, [state.content])

  const copyCaptionAndHashtags = useCallback(async () => {
    if (!state.content) return
    const text = `${state.content.caption}\n\n${state.content.hashtags.join(' ')}\n\n${state.content.cta}`
    await copyToClipboard(text)
  }, [state.content])

  return {
    registerSlideRef,
    exportSingleSlide,
    exportAllSlides,
    copyCaptionAndHashtags,
  }
}
