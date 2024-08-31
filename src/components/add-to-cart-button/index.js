'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../ui/button'
import { AddToCart, removeFromCart } from '@/store/slices/cart-slice';

const AddToCartButton = ({ productItem }) => {

  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(cart?.cartItems);
  function handleAddToCart() {
    dispatch(AddToCart(productItem))
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem?.id))

  }

  return (
    <div className="mt-8 max-w-md">
      <Button type="button"
        onClick={
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }>
        {
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? "Remove from cart"
            : "Add to cart"
        }
      </Button>
    </div>
  )
}

export default AddToCartButton
