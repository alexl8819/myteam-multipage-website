import { render, screen } from '@testing-library/react';

import { Button, LinkButton } from './Button';

describe('Button tests', () => {
  test('Should render a button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeEnabled();
  });

  test('Should render a disabled button', () => {
    render(<Button isDisabled>Test2</Button>);
    expect(screen.getByText('Test2')).toBeDisabled();
  });
});

describe('LinkButton tests', () => {
  test('Should render a link styled as a button', () => {
    render(<LinkButton url="/">Test3</LinkButton>);
    expect(screen.getByText('Test3')).toHaveAttribute('href');
  });
});
