import type { LayoutProps } from '@/types'

export function Colorful({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const c1 = colorOverrides?.primary ?? '#8b5cf6'
  const c2 = colorOverrides?.secondary ?? '#ec4899'
  const c3 = colorOverrides?.accent ?? '#f59e0b'

  return (
    <div style={{ width: dimension.width, height: dimension.height, background: `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-8%', right: '-5%', width: dimension.width * 0.35, height: dimension.width * 0.35, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
      <div style={{ position: 'absolute', bottom: '-12%', left: '-8%', width: dimension.width * 0.4, height: dimension.width * 0.4, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)' }} />

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '3px', margin: 0, marginBottom: '3%', opacity: 0.85, outline: 'none', position: 'relative', zIndex: 1 }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: dimension.width > 800 ? '2.5rem' : '1.8rem', color: '#fff', textAlign: 'center', lineHeight: 1.2, margin: 0, marginBottom: '5%', textShadow: '0 2px 12px rgba(0,0,0,0.15)', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.headline}
      </h2>

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '1.05rem' : '0.9rem', color: '#fff', textAlign: 'center', lineHeight: 1.7, margin: 0, maxWidth: '85%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.body}
      </p>

      <div style={{ position: 'absolute', bottom: '6%', display: 'flex', gap: 6 }}>
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} style={{ width: i === slideIndex ? 24 : 8, height: 8, borderRadius: 4, backgroundColor: i === slideIndex ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'all 0.2s' }} />
        ))}
      </div>
    </div>
  )
}
