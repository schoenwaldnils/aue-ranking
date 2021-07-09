export const SET_INIT = 'SET_INIT'

type SET_INIT = 'SET_INIT'

export type Store = {}

export type Action = { type: SET_INIT }

type Reducer<S, A> = (store: S, action: A) => S

export const reducer: Reducer<Store, Action> = (store, action) => {
  // console.log('action.type', action.type)

  switch (action.type) {
    case SET_INIT:
      return {
        ...store,
      }

    default:
      throw new Error()
  }
}
