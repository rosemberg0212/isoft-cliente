import { createContext, useContext } from 'react'

const citasContext = createContext()

export function useCitas() {
  const context = useContext(citasContext)
  
  if (!context) {
    throw new Error('useCitas debe ser usado por un componente envuelto por AuthState')
  }

  return context
}

export default citasContext