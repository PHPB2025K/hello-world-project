import type { GeneratedContent } from '@/types'

interface AnthropicResponse {
  content: Array<{ type: string; text: string }>
}

export async function generateContent(
  apiKey: string,
  prompt: string,
): Promise<GeneratedContent> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    if (response.status === 401) {
      throw new Error('API key inválida. Verifique sua chave da Anthropic.')
    }
    if (response.status === 429) {
      throw new Error('Limite de requisições atingido. Aguarde um momento e tente novamente.')
    }
    throw new Error(
      errorData?.error?.message || `Erro na API: ${response.status} ${response.statusText}`
    )
  }

  const data = (await response.json()) as AnthropicResponse
  const text = data.content[0]?.text

  if (!text) {
    throw new Error('Resposta vazia da API')
  }

  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error('Resposta da API não contém JSON válido')
  }

  const parsed = JSON.parse(jsonMatch[0]) as GeneratedContent

  if (!parsed.title || !parsed.slides || !parsed.caption || !parsed.hashtags || !parsed.cta) {
    throw new Error('Resposta da API incompleta')
  }

  return parsed
}
