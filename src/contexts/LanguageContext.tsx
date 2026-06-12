import { createContext, useState } from 'react'
import { pt } from '../Locales/pt'
import { en } from '../Locales/en'

export type LanguageContextType = 'en' | 'pt'

interface LanguageContextData {
  language: LanguageContextType
  setLanguage: (Language: LanguageContextType) => void
  t: typeof pt
}

const translations = {
  pt,
  en
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData
)

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageContextType>('pt')

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
