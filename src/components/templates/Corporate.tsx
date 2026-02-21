import type { LayoutProps } from '@/types'

export function Corporate({ slide, slideIndex, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const primary = colorOverrides?.primary ?? '#1e40af'
  const secondary = colorOverrides?.secondary ?? '#3b82f6'
  const bg = colorOverrides?.background ?? '#f8fafc'
  const text = colorOverrides?.accent ?? '#1e293b'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10%', paddingLeft: '14%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '4%', height: '100%', background: `linear-gradient(180deg, ${primary}, ${secondary})` }} />
      <div style={{ position: 'absolute', bottom: 0, left: '4%', right: 0, height: 2, backgroundColor: primary, opacity: 0.1 }} />

      <span style={{ position: 'absolute', top: '5%', right: '5%', fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: primary, opacity: 0.5 }}>
        {String(slideIndex + 1).padStart(2, '0')}
      </span>

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600, fontSize: '0.7rem', color: secondary, textTransform: 'uppercase', letterSpacing: '2px', margin: 0, marginBottom: '3%', outline: 'none' }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: dimension.width > 800 ? '2.2rem' : '1.6rem', color: primary, lineHeight: 1.2, margin: 0, marginBottom: '5%', outline: 'none' }}>
        {slide.headline}
      </h2>

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '1rem' : '0.85rem', color: text, lineHeight: 1.7, margin: 0, maxWidth: '85%', outline: 'none' }}>
        {slide.body}
      </p>
    </div>
  )
}
