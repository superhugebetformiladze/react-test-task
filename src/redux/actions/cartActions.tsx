import { IProduct } from '@models/ProductModel'

export const addToCart = (product: IProduct, quantity: number) => ({
  type: 'ADD_TO_CART',
  payload: product,
  quantity,
})

export const openModal = () => ({
  type: 'OPEN_MODAL',
})

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
})
