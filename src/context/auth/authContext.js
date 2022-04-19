import { createContext, useContext } from 'react'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  
  if (!context) {
    throw new Error('useAuth debe ser usado por un componente envuelto por AuthState')
  }

  return context
}

export default AuthContext
