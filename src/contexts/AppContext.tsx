import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import type { AppState, AppAction } from '@/types'

const initialState: AppState = {
  apiKey: localStorage.getItem('anthropic-api-key'),
  format: 'carousel',
  slideCount: 5,
  dimension: '1080x1080',
  theme: '',
  tone: 'profissional',
  audience: '',
  selectedLayout: 'minimalist',
  colorOverrides: {},
  content: null,
  isGenerating: false,
  error: null,
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_API_KEY':
      if (action.payload) {
        localStorage.setItem('anthropic-api-key', action.payload)
      } else {
        localStorage.removeItem('anthropic-api-key')
      }
      return { ...state, apiKey: action.payload }
    case 'SET_FORMAT': {
      const newState = { ...state, format: action.payload }
      if (action.payload === 'single') {
        newState.slideCount = 1
        if (state.dimension === '1080x1920') newState.dimension = '1080x1080'
      } else if (action.payload === 'stories') {
        newState.dimension = '1080x1920'
        if (state.slideCount < 1) newState.slideCount = 1
        if (state.slideCount > 15) newState.slideCount = 15
      } else {
        if (state.dimension === '1080x1920') newState.dimension = '1080x1080'
        if (state.slideCount < 2) newState.slideCount = 2
        if (state.slideCount > 10) newState.slideCount = 10
      }
      return newState
    }
    case 'SET_SLIDE_COUNT':
      return { ...state, slideCount: action.payload }
    case 'SET_DIMENSION':
      return { ...state, dimension: action.payload }
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    case 'SET_TONE':
      return { ...state, tone: action.payload }
    case 'SET_AUDIENCE':
      return { ...state, audience: action.payload }
    case 'SET_LAYOUT':
      return { ...state, selectedLayout: action.payload, colorOverrides: {} }
    case 'SET_COLOR_OVERRIDE':
      return { ...state, colorOverrides: { ...state.colorOverrides, [action.payload.key]: action.payload.value } }
    case 'RESET_COLOR_OVERRIDES':
      return { ...state, colorOverrides: {} }
    case 'SET_CONTENT':
      return { ...state, content: action.payload, isGenerating: false, error: null }
    case 'UPDATE_SLIDE': {
      if (!state.content) return state
      const slides = [...state.content.slides]
      slides[action.payload.index] = {
        ...slides[action.payload.index],
        [action.payload.field]: action.payload.value,
      }
      return { ...state, content: { ...state.content, slides } }
    }
    case 'SET_GENERATING':
      return { ...state, isGenerating: action.payload, error: action.payload ? null : state.error }
    case 'SET_ERROR':
      return { ...state, error: action.payload, isGenerating: false }
    default:
      return state
  }
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    if (state.apiKey) {
      localStorage.setItem('anthropic-api-key', state.apiKey)
    }
  }, [state.apiKey])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
