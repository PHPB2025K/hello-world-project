import type { LayoutProps } from '@/types'

export function TechModern({ slide, slideIndex, totalSlides, dimension, colorOverrides, isEditing, onTextChange }: LayoutProps) {
  const bg = colorOverrides?.background ?? '#0c1222'
  const cyan = colorOverrides?.accent ?? '#00d4ff'
  const text = colorOverrides?.primary ?? '#e2e8f0'

  return (
    <div style={{ width: dimension.width, height: dimension.height, backgroundColor: bg, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10%', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', backgroundImage: `linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      <div style={{ position: 'absolute', top: '12%', left: '8%', width: 12, height: 12, border: `1px solid ${cyan}`, opacity: 0.3, transform: 'rotate(45deg)' }} />

      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 400, fontSize: '0.7rem', color: cyan, opacity: 0.4, display: 'block', marginBottom: 8, position: 'relative', zIndex: 1 }}>&lt;/&gt;</span>

      {slide.accent && (
        <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('accent', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: '0.7rem', color: cyan, textTransform: 'uppercase', letterSpacing: '3px', margin: 0, marginBottom: '3%', opacity: 0.6, outline: 'none', position: 'relative', zIndex: 1 }}>
          {slide.accent}
        </p>
      )}

      <h2 contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('headline', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: dimension.width > 800 ? '2rem' : '1.5rem', color: cyan, lineHeight: 1.25, margin: 0, marginBottom: '5%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.headline}
      </h2>

      <div style={{ width: 40, height: 2, backgroundColor: cyan, marginBottom: '5%', boxShadow: `0 0 6px ${cyan}44`, position: 'relative', zIndex: 1 }} />

      <p contentEditable={isEditing} suppressContentEditableWarning onBlur={(e) => onTextChange?.('body', e.currentTarget.textContent ?? '')} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: dimension.width > 800 ? '1rem' : '0.88rem', color: text, lineHeight: 1.7, margin: 0, maxWidth: '85%', outline: 'none', position: 'relative', zIndex: 1 }}>
        {slide.body}
      </p>

      <span style={{ position: 'absolute', bottom: '6%', right: '6%', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: cyan, opacity: 0.4 }}>
        {`{${slideIndex + 1}/${totalSlides}}`}
      </span>
    </div>
  )
}
