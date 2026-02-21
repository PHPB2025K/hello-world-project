import type { LayoutProps } from '@/types'

export function HandwrittenOrganic({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const bg = colorOverrides?.background ?? '#fef9ef'
  const brown = colorOverrides?.primary ?? '#5b4636'
  const secondary = colorOverrides?.secondary ?? '#8b7355'
  const accent = colorOverrides?.accent ?? '#d4956a'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '5%', right: '5%', width: dimension.width * 0.2, height: dimension.width * 0.2, borderRadius: '50% 40% 50% 40%', backgroundColor: `${accent}15`, transform: 'rotate(-15deg)' }} />
      <div style={{ position: 'absolute', bottom: '8%', left: '3%', width: dimension.width * 0.15, height: dimension.width * 0.15, borderRadius: '40% 50% 40% 50%', backgroundColor: `${accent}10`, transform: 'rotate(20deg)' }} />

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '0.7rem', color: accent, textTransform: 'uppercase', letterSpacing: '3px', margin: 0, marginBottom: '3%', outline: 'none', position: 'relative', zIndex: 1 }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: dimension.width > 800 ? '3rem' : '2.2rem', color: brown, textAlign: 'center', lineHeight: 1.2, margin: 0, marginBottom: '5%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.headline}
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '5%' }}>
        <div style={{ width: 20, height: 2, backgroundColor: accent, borderRadius: 1 }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', border: `2px solid ${accent}` }} />
        <div style={{ width: 20, height: 2, backgroundColor: accent, borderRadius: 1 }} />
      </div>

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '1rem' : '0.85rem', color: secondary, textAlign: 'center', lineHeight: 1.8, margin: 0, maxWidth: '80%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.body}
      </p>

      <div style={{ position: 'absolute', bottom: '5%', display: 'flex', gap: 6 }}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: i === slideIndex ? brown : `${accent}40` }} />
        ))}
      </div>
    </div>
  )
}
