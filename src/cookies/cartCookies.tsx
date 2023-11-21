import { useCookies } from 'react-cookie'
import { IProduct } from '@models/ProductModel'

export interface CartItem {
  product: IProduct
  quantity: number
}

const CART_COOKIE_NAME = 'cart'

export const useCartCookie = () => {
  const [cookies, setCookie] = useCookies([CART_COOKIE_NAME])

  const getCartItems = (): CartItem[] => {
    const cartCookie = cookies[CART_COOKIE_NAME] || []
    return cartCookie
  }

  const setCartItems = (items: CartItem[]) => {
    setCookie(CART_COOKIE_NAME, JSON.stringify(items), { path: '/' })
  }

  const addToCart = (product: IProduct, quantity: number) => {
    const currentCart = getCartItems()
    const existingItemIndex = currentCart.findIndex((item) => item.product.id === product.id)

    if (existingItemIndex !== -1) {
      const updatedCart = [...currentCart]
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + quantity,
      }
      setCartItems(updatedCart)
    } else {
      const newItem = { product, quantity }
      setCartItems([...currentCart, newItem])
    }
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    const currentCart = getCartItems()
    const updatedCart = currentCart.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    setCartItems(updatedCart)
  }

  const removeFromCart = (productId: number) => {
    const currentCart = getCartItems()
    const updatedCart = currentCart.filter((item) => item.product.id !== productId)
    setCartItems(updatedCart)
  }

  const getTotalPrice = () =>
    getCartItems()
      .reduce((total, item) => total + item.product.price * item.quantity, 0)
      .toFixed(2)

  return {
    getCartItems,
    setCartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
  }
}
