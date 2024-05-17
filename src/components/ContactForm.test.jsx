import { render, screen, fireEvent } from '@testing-library/react';

import ContactForm from './ContactForm';

describe('ContactForm tests', () => {
  test('Should render an error message in the ContactForm if no input is provided for a specific field (i.e name)', () => {
    render(<ContactForm />);
    fireEvent.input(screen.getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.input(screen.getByLabelText('Name'), { target: { value: '' } });
    const errorTexts = screen.queryAllByText('This field is required');
    expect(errorTexts[0]).toBeVisible();
    expect(errorTexts[1]).not.toBeVisible();
  });

  test('Should render an error message in the ContactForm if an incorrect email format is used in the email field', () => {
    render(<ContactForm />);
    fireEvent.input(screen.getByLabelText('Email Address'), { target: { value: 'thisisnot@avalidemail' } });
    expect(screen.getByText('This is not a valid email')).toBeVisible();
  });

  test('Should allow the form to be submitted if the name, email and message fields have valid input', () => {
    render(<ContactForm />);
    fireEvent.input(screen.getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.input(screen.getByLabelText('Email Address'), { target: { value: 'valid@email.com' } });
    fireEvent.input(screen.getByLabelText('Message'), { target: { value: 'This is my message' } });
    expect(screen.getByText('submit')).toBeEnabled();
  });
});
