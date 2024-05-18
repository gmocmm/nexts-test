import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddButton from './index';
import { CartContext } from '../../../contexts/cart';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn()
  }
}));

const mockAddProduct = jest.fn();

const product = {
  id: '1',
  name: 'Test Product',
  price: 10.0,
  description: 'A product for testing'
};

describe('AddButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the AddButton component', () => {
    render(
      <CartContext.Provider value={{ addProduct: mockAddProduct }}>
        <AddButton product={product} />
      </CartContext.Provider>
    );
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  test('calls addProduct and shows toast on button click', () => {
    render(
      <CartContext.Provider value={{ addProduct: mockAddProduct }}>
        <AddButton product={product} />
      </CartContext.Provider>
    );

    fireEvent.click(screen.getByText('Add to cart'));

    expect(mockAddProduct).toHaveBeenCalledWith(product);
    expect(toast.success).toHaveBeenCalledWith(`Added ${product.name} to cart`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  });
});