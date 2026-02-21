import type { LayoutProps } from '@/types'

export function DarkMode({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const bg = colorOverrides?.background ?? '#0a0a0a'
  const neon = colorOverrides?.accent ?? '#00ff88'
  const text = colorOverrides?.primary ?? '#d4d4d4'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      <div style={{ position: 'absolute', top: '6%', right: '6%', width: 30, height: 30, borderTop: `2px solid ${neon}44`, borderRight: `2px solid ${neon}44` }} />
      <div style={{ position: 'absolute', bottom: '6%', left: '6%', width: 30, height: 30, borderBottom: `2px solid ${neon}44`, borderLeft: `2px solid ${neon}44` }} />

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '0.75rem', color: neon, textTransform: 'uppercase', letterSpacing: '3px', margin: 0, marginBottom: '3%', opacity: 0.7, outline: 'none', position: 'relative', zIndex: 1 }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: dimension.width > 800 ? '2.4rem' : '1.75rem', color: neon, lineHeight: 1.2, margin: 0, marginBottom: '5%', textShadow: `0 0 20px ${neon}66, 0 0 40px ${neon}33`, outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.headline}
      </h2>

      <div style={{ width: 80, height: 2, backgroundColor: neon, marginBottom: '5%', boxShadow: `0 0 8px ${neon}66`, position: 'relative', zIndex: 1 }} />

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '1.05rem' : '0.9rem', color: text, lineHeight: 1.7, margin: 0, maxWidth: '85%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.body}
      </p>

      <span style={{ position: 'absolute', bottom: '6%', right: '6%', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: neon, opacity: 0.5, letterSpacing: '2px' }}>
        [{String(slideIndex + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}]
      </span>
    </div>
  )
}
