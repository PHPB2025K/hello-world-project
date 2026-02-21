import { SlideCarousel } from '@/components/preview/SlideCarousel'
import { ExportBar } from '@/components/export/ExportBar'

export function MainArea() {
  return (
    <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
      <SlideCarousel />
      <ExportBar />
    </main>
  )
}
