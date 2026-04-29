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
      'brightness(0) saturate(100%) invert(99%) sepia(7%) saturate(550%) hue-rotate(239deg) brightness(114%) contrast(100%);',
    secundaria:
      'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(267deg) brightness(88%) contrast(107%);'
  },
  svgUniqueColors: {
    blue: 'brightness(0) saturate(100%) invert(36%) sepia(74%) saturate(3722%) hue-rotate(229deg) brightness(107%) contrast(89%);',
    red: 'brightness(0) saturate(100%) invert(30%) sepia(77%) saturate(6879%) hue-rotate(344deg) brightness(100%) contrast(97%);'
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
    secundaria?: string
  }
  svgUniqueColors: {
    blue: string
    red: string
  }
  title: string
  text: string
  border: string
  blueTitle: string
  bluishPurpleTitle: string
  blueTitleHeader: string
}

export default Light
