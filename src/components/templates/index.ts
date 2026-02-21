import type { ComponentType } from 'react'
import type { LayoutProps } from '@/types'
import { Minimalist } from './Minimalist'
import { BoldImpact } from './BoldImpact'
import { Elegant } from './Elegant'
import { Corporate } from './Corporate'
import { Colorful } from './Colorful'
import { DarkMode } from './DarkMode'
import { Gradient } from './Gradient'
import { Editorial } from './Editorial'
import { TechModern } from './TechModern'
import { HandwrittenOrganic } from './HandwrittenOrganic'

export const LAYOUT_COMPONENTS: Record<string, ComponentType<LayoutProps>> = {
  'minimalist': Minimalist,
  'bold-impact': BoldImpact,
  'elegant': Elegant,
  'corporate': Corporate,
  'colorful': Colorful,
  'dark-mode': DarkMode,
  'gradient': Gradient,
  'editorial': Editorial,
  'tech-modern': TechModern,
  'handwritten': HandwrittenOrganic,
}
