import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterButton from './index';

describe('CounterButton', () => {
  it('renders correctly with given text', () => {
    const text = '+';
    const handler = jest.fn();

    render(<CounterButton text={text} handler={handler} />);
    const buttonElement = screen.getByRole('button', { name: text });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(text);
  });

  it('calls handler on button click', () => {
    const text = '+';
    const handler = jest.fn();

    render(<CounterButton text={text} handler={handler} />);
    const buttonElement = screen.getByRole('button', { name: text });
    fireEvent.click(buttonElement);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
