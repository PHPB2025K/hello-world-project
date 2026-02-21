import type { LayoutProps } from '@/types'

export function Elegant({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const bg = colorOverrides?.background ?? '#faf8f5'
  const gold = colorOverrides?.accent ?? '#c9a96e'
  const text = colorOverrides?.primary ?? '#2c2c2c'
  const secondary = colorOverrides?.secondary ?? '#666666'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '6%', left: '6%', right: '6%', bottom: '6%', border: `1px solid ${gold}33`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)', width: 30, height: 1, backgroundColor: gold }} />

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: '0.7rem', color: gold, textTransform: 'uppercase', letterSpacing: '4px', margin: 0, marginBottom: '4%', outline: 'none' }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontStyle: 'italic', fontSize: dimension.width > 800 ? '2.2rem' : '1.6rem', color: text, textAlign: 'center', lineHeight: 1.3, margin: 0, marginBottom: '5%', outline: 'none' }}>
        {slide.headline}
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '5%' }}>
        <div style={{ width: 30, height: 1, backgroundColor: gold }} />
        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: gold, opacity: 0.5 }} />
        <div style={{ width: 30, height: 1, backgroundColor: gold }} />
      </div>

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: dimension.width > 800 ? '1rem' : '0.85rem', color: secondary, textAlign: 'center', lineHeight: 1.8, margin: 0, maxWidth: '80%', outline: 'none' }}>
        {slide.body}
      </p>

      <span style={{ position: 'absolute', bottom: '5%', fontFamily: "'Lato', sans-serif", fontSize: '0.65rem', color: gold, letterSpacing: '2px' }}>
        {slideIndex + 1} / {totalSlides}
      </span>
    </div>
  )
}
