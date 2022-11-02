import { FC, ReactNode, useReducer } from 'react'

import { reducer } from './reducer'
import { initialState, StoreContext } from './Store'

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {
    ...initialState,
  })

  // TODO: make use of store

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
