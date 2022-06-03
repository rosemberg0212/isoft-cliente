import { createContext, useContext } from 'react'

const serviceContext = createContext()

export function useService() {
    const context = useContext(serviceContext)

    if (!context) {
        throw new Error('useService debe ser usado por un componente envuelto por ServiceState')
    }

    return context
}

export default serviceContext