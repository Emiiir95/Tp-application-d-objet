import user from '@testing-library/user-event';
import React from 'react';

import { fireEvent, render, screen, waitFor } from '@/utils/testUtils';

import { Form } from '../../core/Form';

import { TextArea } from './index';

describe('<TextArea />', () => {
  test('should display an input', async () => {
    const mockSubmit = jest.fn((data) => {
      return data;
    });

    render(
      <Form onSubmit={mockSubmit}>
        <TextArea id="description" />
        <button type="submit" data-testid="button-submit" />
      </Form>
    );

    const field = screen.getByTestId('input-description') as HTMLInputElement;
    fireEvent.input(field, {
      target: {
        value: 'test'
      }
    });

    expect(field.value).toBe('test');

    const submitButton = screen.getByTestId('button-submit') as HTMLButtonElement;
    await waitFor(() => user.click(submitButton));
    expect(mockSubmit).toBeCalledWith({ description: 'test' });
  });
});
