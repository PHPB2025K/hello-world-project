import type { LayoutProps } from '@/types'

export function BoldImpact({ slide, slideIndex, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const primary = colorOverrides?.primary ?? '#ff0000'
  const bg = colorOverrides?.background ?? '#ffffff'
  const text = colorOverrides?.secondary ?? '#000000'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', backgroundColor: primary, opacity: 0.08 }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: 60, height: 60, border: `4px solid ${primary}`, opacity: 0.3 }} />

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: '0.75rem', color: primary, textTransform: 'uppercase', letterSpacing: '3px', margin: 0, marginBottom: '3%', outline: 'none', position: 'relative', zIndex: 1 }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '4.5rem' : '3rem', color: text, lineHeight: 0.95, margin: 0, marginBottom: '5%', textTransform: 'uppercase', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.headline}
      </h2>

      <div style={{ width: 60, height: 4, backgroundColor: primary, marginBottom: '5%', position: 'relative', zIndex: 1 }} />

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '1rem' : '0.85rem', color: text, lineHeight: 1.7, margin: 0, maxWidth: '75%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.body}
      </p>

      <span style={{ position: 'absolute', top: '5%', right: '5%', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: primary, opacity: 0.6 }}>
        {String(slideIndex + 1).padStart(2, '0')}
      </span>
    </div>
  )
}
