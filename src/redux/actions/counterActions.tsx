export const increment = () => ({ type: 'INCREMENT' })

export const decrement = () => ({ type: 'DECREMENT' })

export const incrementGlobalQuantity = () => ({ type: 'INCREMENT_GLOBAL_QUANTITY' })

export const decrementGlobalQuantity = () => ({ type: 'DECREMENT_GLOBAL_QUANTITY' })

export const setInitialValue = (productId: number, value: number) => ({
  type: 'SET_INITIAL_VALUE',
  productId,
  payload: value,
})

export const setGlobalQuantity = (value: number) => ({
  type: 'SET_GLOBAL_QUANTITY',
  payload: value,
})
