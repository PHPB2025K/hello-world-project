import type { LayoutProps } from '@/types'

export function Editorial({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const bg = colorOverrides?.background ?? '#faf5ef'
  const primary = colorOverrides?.primary ?? '#1a1a1a'
  const red = colorOverrides?.accent ?? '#c0392b'
  const bodyColor = colorOverrides?.secondary ?? '#3a3a3a'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8% 10%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '8%', left: '10%', width: '30%', height: 3, backgroundColor: red }} />
      <div style={{ position: 'absolute', top: '15%', right: '8%', width: 2, height: '25%', backgroundColor: red, opacity: 0.5 }} />

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.7rem', color: red, textTransform: 'uppercase', letterSpacing: '3px', margin: 0, marginBottom: '4%', outline: 'none', position: 'relative', zIndex: 1 }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: dimension.width > 800 ? '2.6rem' : '1.85rem', color: primary, lineHeight: 1.15, margin: 0, marginBottom: '6%', paddingRight: '15%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.headline}
      </h2>

      {isEditing ? (
        <p contentEditable suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '0.95rem' : '0.85rem', color: bodyColor, lineHeight: 1.75, margin: 0, maxWidth: '90%', outline: 'none', position: 'relative', zIndex: 1 }}>
          {slide.body}
        </p>
      ) : (
        <div style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '90%', position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: dimension.width > 800 ? '4rem' : '3rem', color: red, lineHeight: 0.85, marginRight: 8, marginTop: 4 }}>{slide.body.charAt(0)}</span>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '0.95rem' : '0.85rem', color: bodyColor, lineHeight: 1.75, margin: 0, flex: 1 }}>{slide.body.slice(1)}</p>
        </div>
      )}

      <span style={{ position: 'absolute', bottom: '5%', left: '10%', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', fontWeight: 600, color: red, letterSpacing: '2px' }}>
        {String(slideIndex + 1).padStart(2, '0')} — {String(totalSlides).padStart(2, '0')}
      </span>
    </div>
  )
}
