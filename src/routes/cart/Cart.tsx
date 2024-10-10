import { BsInboxes } from "react-icons/bs";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { clearCartItem, buyedItems, updateProductQuantity } from '../../redux/slice/cartSlice';
import Container from '../../utils';
import { Button, notification } from 'antd';
import { productProps as Product } from '../../types/type';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.products);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleIncrease = (productId: number) => {
    const product = cart.find(p => p.id === productId);
    if (product) {
      const newQuantity = product.quantity + 1;
      dispatch(updateProductQuantity({ productId, quantity: newQuantity }));
      notification.success({
        message: 'Product Updated',
        description: `Product ${product.name} quantity increased to ${newQuantity}`,
      });
    }
  };

  const handleDecrease = (productId: number) => {
    const product = cart.find(p => p.id === productId);
    if (product) {
      const newQuantity = product.quantity - 1;
      if (newQuantity > 0) {
        dispatch(updateProductQuantity({ productId, quantity: newQuantity }));
        notification.info({
          message: 'Product Updated',
          description: `Product ${product.name} quantity decreased to ${newQuantity}`,
        });
      } else {
        dispatch(clearCartItem(productId));
        notification.warning({
          message: 'Product Removed',
          description: `Product ${product.name} removed from cart`,
        });
      }
    }
  };

  const handleClearItem = (productId: number) => {
    const product = cart.find(p => p.id === productId);
    if (product) {
      dispatch(clearCartItem(productId));
      notification.warning({
        message: 'Product Removed',
        description: `Product ${product.name} removed from cart`,
      });
    }
  };

  const handleBuy = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(buyedItems());
      setConfirmLoading(false);
      notification.success({
        message: 'Order Successful',
        description: 'Successfully purchased items. Please wait 2 days for delivery.',
      });
    }, 2000);
  };

  return (
    <div className="text-black my-8 py-10 border-y border-y-gray-400">
      <Container>
        <div className='flex flex-col gap-4 my-5'>
          <div className='flex justify-between items-start'>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="font-bold text-2xl mb-4">Your Cart</h2>

              {cart.length > 0 && (
                <Button type="primary" danger onClick={() => dispatch(buyedItems())}>
                  Clear All
                </Button>
              )}
            </div>
            <div className='w-[300px] flex flex-col gap-2'>
              <h3 className="font-bold text-2xl border-b border-b-gray-400 pb-2">Cart Summary</h3>
              <div className="flex justify-between">
                <span className="font-bold">Subtotal:</span>
                <p>${cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Tax (12%):</span>
                <p>${(cart.reduce((acc, item) => acc + item.quantity * item.price, 0) * 0.12).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Discount:</span>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Shipping:</span>
                <p>Free</p>
              </div>
              <div className="flex justify-between border-t border-t-gray-400 pt-2">
                <span className="font-bold">Total:</span>
                <p>${(cart.reduce((acc, item) => acc + item.quantity * item.price, 0) + (cart.reduce((acc, item) => acc + item.quantity * item.price, 0) * 0.12)).toFixed(2)}</p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <Button type="primary" disabled={cart.length === 0} onClick={handleBuy} loading={confirmLoading}>
                  Buy
                </Button>
              </div>
            </div>
          </div>

          {cart.length > 0 ? (
            <table className="min-w-full bg-white mt-4">
              <thead>
                <tr>
                  <th className="py-2">Product</th>
                  <th className="py-2">Image</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product: Product) => (
                  <tr key={product.id}>
                    <td className="p-2 border">{product.name}</td>
                    <td className="p-2 border text-center">
                      <img src={product.api_featured_image} alt={product.name} width={80} height={80} />
                    </td>
                    <td className="p-2 border text-center">{product.quantity}</td>
                    <td className="p-2 border">{product.price_sign}{(product.price * product.quantity).toFixed(2)}</td>
                    <td className=" border text-center">
                      <div className="mx-2 flex justify-center gap-2">
                        <Button size="large" type="primary" onClick={() => handleIncrease(product.id)}>+</Button>
                        <Button size="large" type="primary" danger onClick={() => handleDecrease(product.id)}>-</Button>
                        <Button size="large" type="primary" onClick={() => handleClearItem(product.id)}>Remove</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='flex flex-col items-center gap-4'>
              <h2><BsInboxes className="text-8xl"/></h2>
              <span className="text-2xl font-bold">Your cart is empty</span>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;