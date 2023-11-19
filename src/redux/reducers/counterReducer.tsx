export interface CounterState {
  data: {
    [productId: number]: number
  }
  globalQuantity: number
}

const initialState: CounterState = {
  data: {},
  globalQuantity: 1,
}

export const counterReducer = (state = initialState, action: any): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        data: {
          ...state.data,
          [action.productId]: Math.min((state.data[action.productId] || 0) + 1, 100),
        },
      }
    case 'DECREMENT':
      return {
        ...state,
        data: {
          ...state.data,
          [action.productId]: Math.max((state.data[action.productId] || 0) - 1, 1),
        },
      }
    case 'INCREMENT_GLOBAL_QUANTITY':
      return {
        ...state,
        globalQuantity: Math.min(state.globalQuantity + 1, 100),
      }
    case 'DECREMENT_GLOBAL_QUANTITY':
      return {
        ...state,
        globalQuantity: Math.max(state.globalQuantity - 1, 1),
      }
    case 'SET_INITIAL_VALUE':
      return {
        ...state,
        data: {
          ...state.data,
          [action.productId]: Math.max(1, Math.min(state.data[action.productId] || 0, 100)),
        },
      }
    case 'SET_GLOBAL_QUANTITY':
      return {
        ...state,
        globalQuantity: action.payload,
      }
    default:
      return state
  }
}
