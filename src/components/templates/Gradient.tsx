import type { LayoutProps } from '@/types'

const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f5576c 0%, #ff6a00 100%)',
  'linear-gradient(135deg, #13547a 0%, #80d0c7 100%)',
]

export function Gradient({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const bgGradient = colorOverrides?.background ? `linear-gradient(135deg, ${colorOverrides.background}, ${colorOverrides.primary ?? '#764ba2'})` : GRADIENTS[slideIndex % GRADIENTS.length]

  return (
    <div style={{ width: dimension.width, height: dimension.height, background: bgGradient, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', borderRadius: 20, padding: '8%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)', maxWidth: '92%', position: 'relative', zIndex: 1 }}>
        {slide.accent && (
          <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '3px', textAlign: 'center', margin: 0, marginBottom: '3%', outline: 'none' }}>
            {slide.accent}
          </p>
        )}

        <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: dimension.width > 800 ? '2.2rem' : '1.6rem', color: '#fff', textAlign: 'center', lineHeight: 1.25, margin: 0, marginBottom: '5%', outline: 'none' }}>
          {slide.headline}
        </h2>

        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '1.05rem' : '0.9rem', color: 'rgba(255,255,255,0.85)', textAlign: 'center', lineHeight: 1.7, margin: 0, outline: 'none' }}>
          {slide.body}
        </p>
      </div>

      <div style={{ position: 'absolute', bottom: '5%', display: 'flex', gap: 8 }}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: i === slideIndex ? '#fff' : 'rgba(255,255,255,0.35)' }} />
        ))}
      </div>
    </div>
  )
}
