import type { LayoutProps } from '@/types'

export function Minimalist({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const bg = colorOverrides?.background ?? '#ffffff'
  const text = colorOverrides?.primary ?? '#1a1a1a'
  const secondary = colorOverrides?.secondary ?? '#888888'
  const accent = colorOverrides?.accent ?? '#e0e0e0'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '8%', left: '10%', right: '10%', height: 1, backgroundColor: accent }} />

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '0.7rem', color: secondary, textTransform: 'uppercase', letterSpacing: '4px', margin: 0, marginBottom: '4%', outline: 'none' }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: dimension.width > 800 ? '2rem' : '1.5rem', color: text, textAlign: 'center', lineHeight: 1.3, margin: 0, marginBottom: '5%', outline: 'none' }}>
        {slide.headline}
      </h2>

      <div style={{ width: 40, height: 1, backgroundColor: accent, marginBottom: '5%' }} />

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: dimension.width > 800 ? '1rem' : '0.85rem', color: secondary, textAlign: 'center', lineHeight: 1.8, margin: 0, maxWidth: '80%', outline: 'none' }}>
        {slide.body}
      </p>

      <div style={{ position: 'absolute', bottom: '6%', display: 'flex', gap: 8 }}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: i === slideIndex ? text : accent }} />
        ))}
      </div>
    </div>
  )
}
