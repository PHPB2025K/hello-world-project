export type PostFormat = 'carousel' | 'single' | 'stories'

export type Dimension = '1080x1080' | '1080x1350' | '1080x1920'

export type Tone = 'profissional' | 'descontraido' | 'educativo' | 'motivacional' | 'vendas'

export interface DimensionInfo {
  width: number
  height: number
  label: string
  ratio: string
}

export const DIMENSIONS: Record<Dimension, DimensionInfo> = {
  '1080x1080': { width: 1080, height: 1080, label: 'Feed Quadrado', ratio: '1:1' },
  '1080x1350': { width: 1080, height: 1350, label: 'Feed Retrato', ratio: '4:5' },
  '1080x1920': { width: 1080, height: 1920, label: 'Stories', ratio: '9:16' },
}

export const TONES: { value: Tone; label: string }[] = [
  { value: 'profissional', label: 'Profissional' },
  { value: 'descontraido', label: 'Descontraído' },
  { value: 'educativo', label: 'Educativo' },
  { value: 'motivacional', label: 'Motivacional' },
  { value: 'vendas', label: 'Vendas' },
]

export interface SlideContent {
  headline: string
  body: string
  accent?: string
}

export interface GeneratedContent {
  title: string
  slides: SlideContent[]
  caption: string
  hashtags: string[]
  cta: string
}

export interface LayoutMeta {
  id: string
  name: string
  description: string
  fonts: string[]
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    accent: string
  }
  previewGradient: string
}

export interface LayoutProps {
  slide: SlideContent
  slideIndex: number
  totalSlides: number
  dimension: DimensionInfo
  colorOverrides?: Record<string, string>
  isEditing?: boolean
  onTextChange?: (field: 'headline' | 'body' | 'accent', value: string) => void
}

export interface AppState {
  apiKey: string | null
  format: PostFormat
  slideCount: number
  dimension: Dimension
  theme: string
  tone: Tone
  audience: string
  selectedLayout: string
  colorOverrides: Record<string, string>
  content: GeneratedContent | null
  isGenerating: boolean
  error: string | null
}

export type AppAction =
  | { type: 'SET_API_KEY'; payload: string | null }
  | { type: 'SET_FORMAT'; payload: PostFormat }
  | { type: 'SET_SLIDE_COUNT'; payload: number }
  | { type: 'SET_DIMENSION'; payload: Dimension }
  | { type: 'SET_THEME'; payload: string }
  | { type: 'SET_TONE'; payload: Tone }
  | { type: 'SET_AUDIENCE'; payload: string }
  | { type: 'SET_LAYOUT'; payload: string }
  | { type: 'SET_COLOR_OVERRIDE'; payload: { key: string; value: string } }
  | { type: 'RESET_COLOR_OVERRIDES' }
  | { type: 'SET_CONTENT'; payload: GeneratedContent }
  | { type: 'UPDATE_SLIDE'; payload: { index: number; field: 'headline' | 'body' | 'accent'; value: string } }
  | { type: 'SET_GENERATING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
