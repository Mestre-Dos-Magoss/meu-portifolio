const Light = {
  button: {
    principal: '#fff',
    secundaria: '#6366f1'
  },
  section: {
    principal: '#fafafa',
    secundaria: '#f1f5f9'
  },
  svgColors: {
    principal:
      'filter: brightness(0) saturate(100%) invert(100%) sepia(8%) saturate(7499%) hue-rotate(118deg) brightness(107%) contrast(99%);'
  },
  title: '#000',
  text: '#64748b',
  border: '#e2e8f0',
  blueTitle: '#7e8eff',
  bluishPurpleTitle: '#8d96d5',
  blueTitleHeader: '#6f7dea'
}

export type Theme = {
  button: {
    principal: string
    secundaria: string
  }
  section: {
    principal: string
    secundaria: string
  }
  svgColors: {
    principal: string
  }
  title: string
  text: string
  border: string
  blueTitle: string
  bluishPurpleTitle: string
  blueTitleHeader: string
}

export default Light
