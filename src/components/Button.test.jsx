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

  test('Should render a primary button in dark mode', () => {
    render(<Button isDark>Dark Button</Button>);
    expect(screen.getByText('Dark Button')).toHaveClass(/_button__primary--dark/, /_button/);
  });

  test('Should render a secondary button', () => {
    render(<Button isPrimary={false}>Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass(/_button__secondary/, /_button/);
  });

  test('Should render a link styled as a button', () => {
    render(<LinkButton url="/">Test3</LinkButton>);
    expect(screen.getByText('Test3')).toHaveAttribute('href');
  });
});
