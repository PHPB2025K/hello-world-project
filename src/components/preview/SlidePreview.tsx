import { forwardRef, type CSSProperties } from 'react'
import type { SlideContent, LayoutProps, Dimension } from '@/types'
import { DIMENSIONS } from '@/types'
import { useApp } from '@/contexts/AppContext'
import { LAYOUT_COMPONENTS } from '@/components/templates'

interface SlidePreviewProps {
  slide: SlideContent
  slideIndex: number
  totalSlides: number
  isEditing?: boolean
  onTextChange?: (field: 'headline' | 'body' | 'accent', value: string) => void
  scale?: number
}

export const SlidePreview = forwardRef<HTMLDivElement, SlidePreviewProps>(
  function SlidePreview({ slide, slideIndex, totalSlides, isEditing, onTextChange, scale = 0.3 }, ref) {
    const { state } = useApp()
    const dimension = DIMENSIONS[state.dimension as Dimension]
    const LayoutComponent = LAYOUT_COMPONENTS[state.selectedLayout]

    if (!LayoutComponent) return null

    const layoutProps: LayoutProps = {
      slide,
      slideIndex,
      totalSlides,
      dimension,
      colorOverrides: state.colorOverrides,
      isEditing,
      onTextChange,
    }

    const containerStyle: CSSProperties = {
      width: dimension.width,
      height: dimension.height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
    }

    return (
      <div style={{ width: dimension.width * scale, height: dimension.height * scale, flexShrink: 0 }}>
        <div ref={ref} style={containerStyle} className="shadow-lg rounded-lg overflow-hidden">
          <LayoutComponent {...layoutProps} />
        </div>
      </div>
    )
  }
)
