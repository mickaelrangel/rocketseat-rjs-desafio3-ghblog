import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export function publishedDateRelativeToNow(date: string): string {
  const dateFormated = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })

  return dateFormated
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
