export interface CounterState {
  data: number
}

const initialState: CounterState = {
  data: 0,
}

export const counterReducer = (state = initialState, action: any): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, data: Math.min(state.data + 1, 100) }
    case 'DECREMENT':
      return { ...state, data: Math.max(state.data - 1, 0) }
    case 'SET_INITIAL_VALUE':
      return { ...state, data: Math.max(0, Math.min(action.payload, 100)) }
    default:
      return state
  }
}
