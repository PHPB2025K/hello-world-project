import type { PostFormat, Tone, Dimension } from '@/types'

const TONE_DESCRIPTIONS: Record<Tone, string> = {
  profissional: 'Tom profissional e corporativo, linguagem formal mas acessível',
  descontraido: 'Tom descontraído e informal, próximo do público, uso de gírias leves',
  educativo: 'Tom didático e informativo, explica conceitos de forma clara',
  motivacional: 'Tom inspirador e motivacional, frases de impacto, energia positiva',
  vendas: 'Tom persuasivo e focado em conversão, destaca benefícios, gera urgência',
}

const FORMAT_DESCRIPTIONS: Record<PostFormat, string> = {
  carousel: 'carrossel do Instagram (múltiplos slides que o usuário desliza)',
  single: 'post único de imagem estática no feed do Instagram',
  stories: 'sequência de stories do Instagram (conteúdo efêmero, vertical)',
}

export function buildPrompt(config: {
  format: PostFormat
  slideCount: number
  dimension: Dimension
  theme: string
  tone: Tone
  audience: string
}): string {
  const { format, slideCount, theme, tone, audience } = config

  return `Você é um especialista em criação de conteúdo para Instagram. Crie conteúdo para um ${FORMAT_DESCRIPTIONS[format]}.

CONFIGURAÇÕES:
- Formato: ${FORMAT_DESCRIPTIONS[format]}
- Quantidade de slides/stories: ${slideCount}
- Tema/Assunto: ${theme}
- Tom de voz: ${TONE_DESCRIPTIONS[tone]}
- Público-alvo: ${audience}

REGRAS:
1. O headline de cada slide deve ser CURTO (máximo 8 palavras), impactante e chamar atenção
2. O body de cada slide deve ter 1-3 frases relevantes ao tema
3. O primeiro slide deve ser a "capa" — headline chamativo que gere curiosidade
4. O último slide deve ter um call-to-action forte
5. A caption deve ser otimizada para engajamento no Instagram
6. Inclua 15-20 hashtags relevantes e populares
7. Todo o conteúdo deve ser em PORTUGUÊS BRASILEIRO

FORMATO DE RESPOSTA (JSON estrito):
{
  "title": "título geral do post",
  "slides": [
    {
      "headline": "texto curto do headline",
      "body": "texto principal do slide",
      "accent": "texto de destaque opcional"
    }
  ],
  "caption": "legenda completa para o Instagram",
  "hashtags": ["#hashtag1", "#hashtag2"],
  "cta": "texto do call-to-action"
}

Retorne APENAS o JSON, sem texto adicional antes ou depois.`
}
