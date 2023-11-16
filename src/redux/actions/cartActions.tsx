import { IProduct } from '@models/ProductModel'

export const addToCart = (product: IProduct) => ({
  type: 'ADD_TO_CART',
  payload: product,
})

export const openModal = () => ({
  type: 'OPEN_MODAL',
})

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
})
