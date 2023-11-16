export const increment = () => ({ type: 'INCREMENT' }) as const

export const decrement = () => ({ type: 'DECREMENT' }) as const

export const setInitialValue = (value: number) => ({
  type: 'SET_INITIAL_VALUE',
  payload: value,
})
