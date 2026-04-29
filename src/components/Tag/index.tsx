import { TagContainer } from './styles'

type Props = {
  status: 'Concluído' | 'Em andamento' | 'Planejando'
}

const Tag = ({ status }: Props) => {
  const getColor = () => {
    switch (status) {
      case 'Concluído':
        return '#4CAF50' // Verde
      case 'Em andamento':
        return '#2196F3' // Azul
      case 'Planejando':
        return '#FF9800' // Laranja
    }
  }

  const getEmoji = ({ status }: Props) => {
    switch (status) {
      case 'Concluído':
        return '✓'
      case 'Em andamento':
        return '⚡'
      case 'Planejando':
        return '💡'
    }
  }

  return (
    <TagContainer color={getColor()}>
      <span>
        {getEmoji({ status })} {status}
      </span>
    </TagContainer>
  )
}

export default Tag
